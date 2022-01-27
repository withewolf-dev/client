import React from 'react'
import {
  AnnotationIcon,
  DotsHorizontalIcon,
  StatusOnlineIcon,
} from '@heroicons/react/solid'
import Search from './Search'
import MessageBox from './MessageBox'

type Props = {}

const ChatList = (props: Props) => {
  return (
    <div className="flex flex-[0.35] flex-col ">
      <div className="flex items-center justify-between border-r border-gray-300">
        <img
          className="mx-2 my-2 h-10 w-10 rounded-full object-fill"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="profile"
        />
        <div className="flex">
          <StatusOnlineIcon className="icon" />
          <AnnotationIcon className="icon" />
          <DotsHorizontalIcon className="icon" />
        </div>
      </div>
      <Search />
      <div className="flex-1 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300">
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </div>
    </div>
  )
}

export default ChatList
