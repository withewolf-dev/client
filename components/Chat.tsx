import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  ChatInstance,
  CurrentUser,
  LoadChatWindow,
  LoadingChat,
} from '../atoms/atoms'
import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import TextBox from './TextBox'
import io, { Socket } from 'socket.io-client'

type Props = {}
const ENDPOINT = 'http://localhost:5000' // "https://talk-a-tive.herokuapp.com"; -> After deployment

const Chat = (props: Props) => {
  const loadingChat = useRecoilValue(LoadingChat)
  const chatInstance = useRecoilValue(ChatInstance)
  const currentUser = useRecoilValue(CurrentUser)
  const [loadChatWindow, setloadChatWindow] = useRecoilState(LoadChatWindow)

  const [socket, setsocket] = useState<Socket>()

  const isEmpty = Object.keys(chatInstance).length === 0

  useEffect(() => {
    const s = io('http://localhost:5000/')
    setsocket(s)
    if (socket) {
      socket.emit('setup', currentUser)
      socket.on('connected', () => {
        console.log('Connected')
      })
    }
  }, [chatInstance])

  return (
    <div className="flex flex-[0.65] flex-col ">
      {!loadChatWindow && <h2>Click on chat to start chating</h2>}
      {loadChatWindow && (
        <>
          {!loadingChat && (
            <>
              {!isEmpty && (
                <>
                  {' '}
                  <ChatHeader />
                  <Conversation socket={socket} />
                  <TextBox socket={socket} />
                </>
              )}
            </>
          )}
          {loadingChat && (
            <div className=" flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900"></div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Chat
