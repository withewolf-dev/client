import React from 'react'

type Props = {}

const SignupForm = (props: Props) => {
  return (
    <div className="bg-grey-lighter flex  flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="password"
            placeholder="Password"
          />
          <input
            type="file"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button className="text-md mb-4 block w-full rounded bg-green-500 p-3 text-gray-700">
            Sign up
          </button>
          <button className="mb-4 block w-full rounded border-4  border-green-700 p-3">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
