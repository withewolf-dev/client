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

const Chat = (props: Props) => {
  const loadingChat = useRecoilValue(LoadingChat)
  const chatInstance = useRecoilValue(ChatInstance)
  const currentUser = useRecoilValue(CurrentUser)
  const [loadChatWindow, setloadChatWindow] = useRecoilState(LoadChatWindow)

  const [socket, setsocket] = useState<Socket>()

  const isEmpty = Object.keys(chatInstance).length === 0

  useEffect(() => {
    const s = io('https://whatsappchat-server.herokuapp.com')
    setsocket(s)
    if (socket) {
      socket.emit('setup', currentUser)
      socket.on('connected', () => {
        console.log('Connected')
      })
    }
  }, [chatInstance])

  return (
    <div className="flex flex-[0.65] flex-col">
      {!loadChatWindow && (
        <div className="flex h-80  items-center justify-center">
          Click on chat to start chating
        </div>
      )}
      {loadChatWindow && (
        <>
          {!isEmpty && (
            <>
              {' '}
              {/* <ChatHeader /> */}
              <Conversation socket={socket} />
              <TextBox socket={socket} />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Chat
