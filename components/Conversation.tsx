import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Socket } from 'socket.io-client'
import { ChatInstance, CurrentUser, Messages } from '../atoms/atoms'

type Props = {
  socket: Socket
}

const Conversation = ({ socket }: Props) => {
  const chatInstance = useRecoilValue(ChatInstance)
  const [messages, setMessages] = useRecoilState(Messages)
  const currentUser = useRecoilValue(CurrentUser)

  const fetchMessages = async () => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }

      const { data } = await axios.get(
        `http://localhost:5000/api/message/${chatInstance[`_id`]}`,
        config
      )
      setMessages(data)
      // setLoading(false)
      socket.emit('join chat', chatInstance[`_id`])
    } catch (error) {
      alert('Failed to Load the Messages')
    }
  }

  useEffect(() => {
    if (!socket) return
    fetchMessages()
  }, [chatInstance])

  useEffect(() => {
    if (!socket) return
    socket.on('message recieved', (newMessageRecieved) => {
      setMessages([...messages, newMessageRecieved])
      console.log([...messages, newMessageRecieved])
    })
  })

  return (
    <div className="flex-1 overflow-y-auto bg-chat-wallpaper bg-cover bg-center bg-no-repeat p-6 scrollbar-thin scrollbar-thumb-gray-300">
      {messages &&
        messages.map((m, i) => (
          <div key={m._id}>
            {currentUser[`_id`] === m.sender[`_id`] && (
              <p className=" message ml-auto  bg-chatColor before:right-[-5px] before:bg-chatColor">
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                  {currentUser[`name`]}
                </span>
                {m.content}
                <span className="ml-2 text-[10px] font-bold text-gray-600">
                  03.3 am
                </span>
              </p>
            )}

            {currentUser[`_id`] !== m.sender[`_id`] && (
              <p className=" message  bg-white before:left-[-5px] before:bg-white">
                <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
                  {m.sender.name}
                </span>
                {m.content}
                <span className="ml-2 text-[10px] font-bold text-gray-600">
                  03.3 am
                </span>
              </p>
            )}
          </div>
        ))}
    </div>
  )
}

export default Conversation
