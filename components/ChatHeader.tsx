import React from 'react'
import {
  VideoCameraIcon,
  PhoneIcon,
  PaperClipIcon,
} from '@heroicons/react/solid'
import { useRecoilValue } from 'recoil'
import { ChatInstance, CurrentUser } from '../atoms/atoms'
import { getSender, getSenderPic } from '../utils'
type Props = {}

const ChatHeader = (props: Props) => {
  const chatInstance = useRecoilValue(ChatInstance)
  const currentUser = useRecoilValue(CurrentUser)

  return (
    <div className="flex items-center border-b border-gray-300 p-2">
      {chatInstance[`_id`] !== undefined && (
        <>
          <img
            className="mx-2 my-2 h-10 w-10 rounded-full object-cover"
            src={
              !chatInstance[`isGroupChat`]
                ? getSenderPic(currentUser, chatInstance[`users`])
                : chatInstance[`pic`]
            }
            alt="profile"
          />
          <div className="flex-1">
            <h1 className="font-bold"></h1>
            <p className="text-sm text-gray-500">
              {!chatInstance[`isGroupChat`]
                ? getSender(currentUser, chatInstance[`users`])
                : chatInstance[`name`]}
            </p>
          </div>
          <div className="flex">
            <VideoCameraIcon className="icon" />
            <PhoneIcon className="icon" />
            <PaperClipIcon className="icon" />
          </div>
        </>
      )}
    </div>
  )
}

export default ChatHeader
