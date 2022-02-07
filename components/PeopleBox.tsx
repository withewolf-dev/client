import axios from 'axios'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  Chat,
  ChatInstance,
  CurrentUser,
  LoadingChat,
  SearchTerm,
} from '../atoms/atoms'

type Props = {
  pic: string
  name: string
  email: string
  userId: string
}

const PeopleBox = ({ pic, email, name, userId }: Props) => {
  const [chats, setChats] = useRecoilState(Chat)
  const [term, setTerm] = useRecoilState(SearchTerm)
  const [loadingChat, setloadingChat] = useRecoilState(LoadingChat)
  const [chatInstance, setchatInstance] = useRecoilState(ChatInstance)
  const currentUser = useRecoilValue(CurrentUser)

  const accessChat = async () => {
    try {
      setloadingChat(true)

      const { data } = await axios.post(
        `https://whatsappchat-server.herokuapp.com/api/chat`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${currentUser[`token`]}`,
          },
        }
      )

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats])
      setchatInstance(data)
    } catch (error) {
      alert('Error fetching the chat')
    }
    setloadingChat(false)
    setTerm('')
  }

  return (
    <div
      onClick={accessChat}
      className="flex cursor-pointer border-b border-searchBg p-2 duration-150 ease-out hover:bg-bgApp "
    >
      <img
        className="mx-2 my-2 h-12 w-12 rounded-full object-fill text-xs"
        src={pic}
        alt="profile"
      />
      <div className="ml-3 mt-2 flex-1">
        <h2 className="text-md">{name}</h2>
        <p className="text-[16px] text-gray-500">{email}</p>
      </div>
    </div>
  )
}

export default PeopleBox
