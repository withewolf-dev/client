import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ChatInstance, CurrentUser, LoadChatWindow } from '../atoms/atoms'
import { getSender, getSenderPic } from '../utils'

const MessageBox = ({ chats }) => {
  const currentUser = useRecoilValue(CurrentUser)
  const [chatInstance, setchatInstance] = useRecoilState(ChatInstance)

  const [loadChatWindow, setloadChatWindow] = useRecoilState(LoadChatWindow)

  return (
    <div
      onClick={() => {
        setchatInstance(chats)
        setloadChatWindow(true)
      }}
      className="flex cursor-pointer border-b border-searchBg p-2 duration-150 ease-out hover:bg-bgApp "
    >
      <img
        className="mx-2 my-2 h-12 w-12 rounded-full object-contain text-xs"
        src={
          !chats.isGroupChat
            ? getSenderPic(currentUser, chats.users)
            : chats.pic
        }
        alt="profile"
      />
      <div className="ml-3 mt-2 flex-1">
        <h2 className="text-md">
          {!chats.isGroupChat
            ? getSender(currentUser, chats.users)
            : chats.name}
        </h2>
        {chats.latestMessage && (
          <p className="text-[16px] text-gray-500">
            {/* <b>{chats.latestMessage.sender.name} : </b> */}
            {chats.latestMessage.content.length > 50
              ? chats.latestMessage.content.substring(0, 51) + '...'
              : chats.latestMessage.content}
          </p>
        )}
        {!chats.latestMessage && (
          <p className="text-[16px] text-gray-500">start message</p>
        )}
      </div>
      <p className="mt-2 text-xs text-gray-700"> 4:40 pm</p>
    </div>
  )
}

export default MessageBox
