import React from 'react'

type Props = {}

const Conversation = (props: Props) => {
  return (
    <div className="flex-1 overflow-y-auto bg-chat-wallpaper bg-cover bg-center bg-no-repeat p-6 scrollbar-thin scrollbar-thumb-gray-300">
      <p className=" message ml-auto  bg-chatColor before:right-[-5px] before:bg-chatColor">
        <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
          Gitartha Kashyap
        </span>
        some message
        <span className="ml-2 text-[10px] font-bold text-gray-600">
          03.3 am
        </span>
      </p>
      <p className=" message  bg-white before:left-[-5px] before:bg-white">
        <span className="absolute top-[-18px] left-1 text-[12px] font-bold">
          Gitartha Kashyap
        </span>
        some message are really big here it is some message are really big here
        it is
        <span className="ml-2 text-[10px] font-bold text-gray-600">
          03.3 am
        </span>
      </p>
    </div>
  )
}

export default Conversation
