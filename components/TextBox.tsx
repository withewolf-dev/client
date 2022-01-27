import React from 'react'
import { EmojiHappyIcon, MicrophoneIcon } from '@heroicons/react/outline'
type Props = {}

const TextBox = (props: Props) => {
  return (
    <div className="flex h-[62px] items-center justify-between border-t border-gray-300 px-2">
      <EmojiHappyIcon className="icon" />
      <input
        className="text-md flex flex-1 rounded-sm p-2 text-gray-700 outline-none "
        placeholder="type a message"
      />
      <MicrophoneIcon className="icon" />
    </div>
  )
}

export default TextBox
