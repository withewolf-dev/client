import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Chat } from '../atoms/atoms'
import MessageBox from './MessageBox'

type Props = {}

const MyChat = (props: Props) => {
  //const [init, setinit] = useState(true)
  const [chats, setchats] = useRecoilState(Chat)

  useEffect(() => {
    fetchChats()
  }, [])

  const fetchChats = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/chat/`, {
        withCredentials: true,
      })
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
