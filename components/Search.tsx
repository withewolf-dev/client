import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { SearchTerm } from '../atoms/atoms'
type Props = {}

const Search = (props: Props) => {
  const [Tearm, setTearm] = useRecoilState(SearchTerm)

  return (
    <div className="flex items-center bg-searchBg p-[8px]">
      <div className="flex h-[35px] w-full items-center rounded-2xl bg-white">
        <SearchIcon className="mx-1 h-4 w-4  text-gray-400" />
        <input
          value={Tearm}
          onChange={(e) => {
            setTearm(e.target.value)
          }}
          type={'text'}
          placeholder="search"
          className="ml-[5px] w-72 border-none text-gray-600 outline-none"
        />
      </div>
    </div>
  )
}

export default Search
