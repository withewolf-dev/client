import React from 'react'
import {
  VideoCameraIcon,
  PhoneIcon,
  PaperClipIcon,
} from '@heroicons/react/solid'
type Props = {}

const ChatHeader = (props: Props) => {
  return (
    <div className="flex items-center border-b border-gray-300 p-2">
      <img
        className="mx-2 my-2 h-10 w-10 rounded-full object-fill"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="profile"
      />
      <div className="flex-1">
        <h1 className="font-bold">Some name</h1>
        <p className="text-sm text-gray-500"> last seen</p>
      </div>
      <div className="flex">
        <VideoCameraIcon className="icon" />
        <PhoneIcon className="icon" />
        <PaperClipIcon className="icon" />
      </div>
    </div>
  )
}

export default ChatHeader
