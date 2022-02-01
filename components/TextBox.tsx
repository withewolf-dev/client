import React, { useState } from 'react'
import { EmojiHappyIcon, MicrophoneIcon } from '@heroicons/react/outline'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ChatInstance, CurrentUser, Messages } from '../atoms/atoms'
import axios from 'axios'
import { Socket } from 'socket.io-client'
type Props = {
  socket: Socket
}

const TextBox = ({ socket }: Props) => {
  const [text, settext] = useState('')

  const currentUser = useRecoilValue(CurrentUser)
  const chatInstance = useRecoilValue(ChatInstance)
  const [messages, setMessages] = useRecoilState(Messages)

  const sendMessage = async (e) => {
    if (!socket) return
    if (e.key === 'Enter' && text.trim()) {
      //socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            'Content-type': 'application/json',
          },

          withCredentials: true,
        }
        settext('')
        const { data } = await axios.post(
          'http://localhost:5000/api/message',
          {
            content: text,
            chatId: chatInstance[`_id`],
          },
          config
        )
        socket.emit('new message', data)
        setMessages([...messages, data])
      } catch (error) {
        alert('Failed to send the Message')
      }
    }
  }
  return (
    <div className="flex h-[62px] items-center justify-between border-t border-gray-300 px-2">
      <EmojiHappyIcon className="icon" />
      <input
        onKeyPress={sendMessage}
        value={text}
        onChange={(e) => {
          settext(e.target.value)
        }}
        className="text-md flex flex-1 rounded-sm p-2 text-gray-700 outline-none "
        placeholder="type a message ... and press enter to send"
      />
      <MicrophoneIcon className="icon" />
    </div>
  )
}

export default TextBox
