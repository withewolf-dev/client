import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentUser, LoginUiState } from '../atoms/atoms'
import LoginForm from './LoginForm'
import SignupForm from './SignUpForm'

type Props = {}

const Login = (props: Props) => {
  const loginUiState = useRecoilValue(LoginUiState)

  return (
    <div className="relative  bg-mainBg">
      <div className=" h-16 w-full bg-green-500"></div>
      <div className="absolute top-8 left-[250px]  flex h-[90vh] w-[70vw] bg-bgApp shadow-2xl">
        <div className="flex  flex-[0.65] items-center">
          <img src="whatsapp.png" alt="whatsapp" className="ml-20 h-80 w-80" />
        </div>
        <div className="flex flex-[0.35]">
          {loginUiState && <LoginForm />}
          {!loginUiState && <SignupForm />}
        </div>
      </div>
    </div>
  )
}

export default Login
