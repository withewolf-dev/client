import Head from 'next/head'
import Chat from '../components/Chat'
import ChatList from '../components/ChatList'
import Login from '../components/Login'

export default function Home() {
  return (
    <Login />
    // <div className="relative  bg-mainBg">
    //   <Head>
    //     <title>WhatsApp ui clone</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <div className=" h-16 w-full bg-green-500"></div>
    //   <div className="absolute top-8 left-[250px]  flex h-[90vh] w-[70vw] bg-bgApp shadow-2xl">
    //     <ChatList />
    //     <Chat />
    //   </div>
    // </div>
  )
}
