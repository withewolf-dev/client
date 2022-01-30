import Head from 'next/head'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentUser } from '../atoms/atoms'
import Chat from '../components/Chat'
import ChatList from '../components/ChatList'
import Login from '../components/Login'
import { useEffect } from 'react'

export default function Home({ me }) {
  const [currentUser, setcurrentUser] = useRecoilState(CurrentUser)
  // const user = useRecoilValue(CurrentUser)

  // console.log(me)

  useEffect(() => {
    setcurrentUser(me)
  }, [me])

  if (!currentUser[`name`]) return <Login />
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
  console.log(context.req.headers.cookie)

  const cookie = context.req.headers.cookie
  const resp = await fetch('http://localhost:5000/api/user/me', {
    headers: {
      cookie: cookie!,
    },
  })

  const me = await resp.json()

  console.log(me, 'me')

  return {
    props: { me },
  }
}
