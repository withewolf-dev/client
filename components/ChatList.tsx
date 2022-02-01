import React, { useEffect, useState } from 'react'
import {
  AnnotationIcon,
  StatusOnlineIcon,
  LogoutIcon,
} from '@heroicons/react/solid'
import Search from './Search'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentUser, SearchTerm } from '../atoms/atoms'
import axios from 'axios'
import PeopleBox from './PeopleBox'
import MyChat from './MyChat'
import Loader from './Loader'

type Props = {}

const ChatList = (props: Props) => {
  const [user, setUser] = useRecoilState(CurrentUser)
  const term = useRecoilValue(SearchTerm)
  const [init, setinit] = useState(true)
  const [people, setpeople] = useState<any>()
  const [loading, setloading] = useState(false)

  useEffect(() => {
    if (init === true) {
      setinit(false)
    } else {
      getSearchResult()
    }
  }, [term.trim()])

  const getSearchResult = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/user?search=${term}`,
      { withCredentials: true }
    )
    setpeople(res.data)
  }

  const Logout = async () => {
    setloading(true)

    try {
      const config = {
        withCredentials: true,
      }
      const { data } = await axios.get(
        'http://localhost:5000/api/user/logout',

        config
      )
      console.log(data)

      setUser({})
    } catch (error) {
      alert('Failed to log you out')
    }

    setloading(false)
  }
  return (
    <div className="flex flex-[0.35] flex-col ">
      <div className="flex items-center justify-between border-r border-gray-300">
        <img
          className="mx-2 my-2 h-10 w-10 rounded-full object-cover"
          src={user[`pic`]}
          alt="profile"
        />
        <div className="flex">
          <StatusOnlineIcon className="icon" />
          <AnnotationIcon className="icon" />
          {!loading && <LogoutIcon onClick={Logout} className="icon" />}
          {loading && <Loader />}
        </div>
      </div>
      <Search />
      <div className="flex-1 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300">
        {term &&
          people &&
          people.map((e) => (
            <div key={e._id}>
              <PeopleBox
                userId={e._id}
                pic={e.pic}
                name={e.name}
                email={e.email}
              />
            </div>
          ))}
        {!term && <MyChat />}
      </div>
    </div>
  )
}

export default ChatList
