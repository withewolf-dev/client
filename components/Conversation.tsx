import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Socket } from 'socket.io-client'
import {
  ChatInstance,
  CurrentUser,
  LoadingChat,
  Messages,
} from '../atoms/atoms'
import Loader from './Loader'

type Props = {
  socket: Socket
}

const Conversation = ({ socket }: Props) => {
  const chatInstance = useRecoilValue(ChatInstance)
  const [messages, setMessages] = useRecoilState(Messages)
  const currentUser = useRecoilValue(CurrentUser)

  const [loadingChat, setLoadingChat] = useRecoilState(LoadingChat)

  const fetchMessages = async () => {
    //console.log('loading chat')

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${currentUser[`token`]}`,
        },
      }

      const { data } = await axios.get(
        `https://whatsappchat-server.herokuapp.com/api/message/${
          chatInstance[`_id`]
        }`,
        config
      )
      setMessages(data)
      setLoadingChat(false)
      socket.emit('join chat', chatInstance[`_id`])
    } catch (error) {
      setLoadingChat(false)

      alert('Failed to Load the Messages')
    }
  }

  useEffect(() => {
    if (!socket) return
    fetchMessages()
    setLoadingChat(true)
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
      {!loadingChat &&
        messages &&
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
      {loadingChat && <Loader />}
    </div>
  )
}

export default Conversation
