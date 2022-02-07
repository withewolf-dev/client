import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Chat, CurrentUser } from '../atoms/atoms'
import MessageBox from './MessageBox'

type Props = {}

const MyChat = (props: Props) => {
  //const [init, setinit] = useState(true)
  const [chats, setchats] = useRecoilState(Chat)
  const user = useRecoilValue(CurrentUser)

  useEffect(() => {
    fetchChats()
  }, [])

  const fetchChats = async () => {
    try {
      const { data } = await axios.get(
        `https://whatsappchat-server.herokuapp.com/api/chat/`,
        {
          headers: {
            Authorization: `Bearer ${user[`token`]}`,
          },
        }
      )
      setchats(data)
      // console.log(data)
    } catch (error) {
      alert('Failed to Load the chats')
    }
  }

  return (
    <div>
      {chats &&
        chats.map(
          (chat) => <MessageBox key={chat._id} chats={chat} />
          // chat.map((ch) => <MessageBox key={ch._id} chats={ch} />)
        )}
    </div>
  )
}

export default MyChat
