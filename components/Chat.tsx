import React from 'react'
import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import TextBox from './TextBox'

type Props = {}

const Chat = (props: Props) => {
  return (
    <div className="flex flex-[0.65] flex-col ">
      <ChatHeader />
      <Conversation />
      <TextBox />
    </div>
  )
}

export default Chat
