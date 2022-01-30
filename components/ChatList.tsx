import React from 'react'
import {
  AnnotationIcon,
  DotsHorizontalIcon,
  StatusOnlineIcon,
} from '@heroicons/react/solid'
import Search from './Search'
import MessageBox from './MessageBox'
import { useRecoilValue } from 'recoil'
import { CurrentUser } from '../atoms/atoms'

type Props = {}

const ChatList = (props: Props) => {
  const user = useRecoilValue(CurrentUser)

  return (
    <div className="flex flex-[0.35] flex-col ">
      <div className="flex items-center justify-between border-r border-gray-300">
        <img
          className="mx-2 my-2 h-10 w-10 rounded-full object-fill"
          src={user[`pic`]}
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
