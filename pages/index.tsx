import Head from 'next/head'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentUser } from '../atoms/atoms'
import Chat from '../components/Chat'
import ChatList from '../components/ChatList'
import Login from '../components/Login'
import { useEffect } from 'react'
import { isEmpty } from '../utils'

export default function Home({ me }) {
  const [currentUser, setcurrentUser] = useRecoilState(CurrentUser)

  useEffect(() => {
    setcurrentUser(me)
  }, [me])

  if (isEmpty(currentUser)) return <Login />
  return (
    <div className="relative  bg-mainBg">
      <Head>
        <title>WhatsApp ui clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-16 w-full bg-green-500"></div>
      <div className="absolute top-8 left-[250px]  flex h-[90vh] w-[70vw] bg-bgApp shadow-2xl">
        <ChatList />
        <Chat />
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const cookie = context.req.headers.cookie
  const resp = await fetch('http://localhost:5000/api/user/me', {
    headers: {
      cookie: cookie!,
    },
  })

  const me = await resp.json()

  if (me.user === null) {
    return {
      props: { me: {} },
    }
  }

  return {
    props: { me },
  }
}
