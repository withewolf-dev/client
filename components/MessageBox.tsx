import React from 'react'

type Props = {}

const MessageBox = (props: Props) => {
  return (
    <div className="flex cursor-pointer border-b border-searchBg p-2 duration-150 ease-out hover:bg-bgApp ">
      <img
        className="mx-2 my-2 h-12 w-12 rounded-full object-fill"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="profile"
      />
      <div className="ml-3 mt-2 flex-1">
        <h2 className="text-md">Some name</h2>
        <p className="text-[16px] text-gray-500">last message</p>
      </div>
      <p className="mt-2 text-xs text-gray-700"> 4:40 pm</p>
    </div>
  )
}

export default MessageBox
