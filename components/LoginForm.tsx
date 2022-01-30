import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { CurrentUser, LoginUiState } from '../atoms/atoms'

type Props = {}

const LoginForm = (props: Props) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false)

  const [changeToSignUp, setchangeToSignUp] = useRecoilState(LoginUiState)
  const [user, setuser] = useRecoilState(CurrentUser)

  const changeTo = () => {
    setchangeToSignUp(false)
  }

  const Login = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
      const { data } = await axios.post(
        `http://localhost:5000/api/user/login`,
        {
          email,
          password,
        },
        config
      )
      console.log(data)
      setloading(false)
      setuser(data)
    } catch (error) {
      setloading(false)
      alert(error.response.data.message)
    }
    setemail('')
    setpassword('')
  }
  return (
    <div className="bg-grey-lighter flex  flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign In</h1>

          <input
            type="text"
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="password"
            placeholder="Password"
          />

          <button
            onClick={Login}
            className="text-md mb-4 block w-full rounded bg-green-500 p-3 text-gray-700"
          >
            {!loading && <h2>Login</h2>}
            {loading && (
              <div className=" flex items-center justify-center">
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900"></div>
              </div>
            )}
          </button>
          <button
            onClick={changeTo}
            className="mb-4 block w-full rounded border-4  border-green-700 p-3"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
