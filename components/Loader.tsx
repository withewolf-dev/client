import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className=" flex items-center justify-center">
      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </div>
  )
}

export default Loader
