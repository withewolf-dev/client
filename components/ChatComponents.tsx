import React from 'react'
import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import TextBox from './TextBox'

type Props = {}

const ChatComponents = (props: Props) => {
  return (
    <>
      {' '}
      <ChatHeader />
      <Conversation />
      <TextBox />
    </>
  )
}

export default ChatComponents
