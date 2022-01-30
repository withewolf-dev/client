import React, { SyntheticEvent, useState } from 'react'
import firestore, { storage } from '../firebaseinit'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CurrentUser, LoginUiState } from '../atoms/atoms'

type Props = {}

const SignupForm = (props: Props) => {
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [pic, setpic] = useState<any>('')
  const [loading, setloading] = useState(false)
  const [fileName, setfileName] = useState('')

  const [changeToLogin, setchangeToLogin] = useRecoilState(LoginUiState)

  const changeTo = () => {
    setchangeToLogin(true)
  }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      setfileName(e.target.files[0].name)

      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setpic(readerEvent.target?.result)
    }
  }

  const UploadImage = async () => {
    const imageRef = ref(storage, `images/${fileName}`)

    if (pic) {
      await uploadString(imageRef, pic, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef)
        console.log('done')

        return downloadURL
      })
    }
  }
  const SignUp = async () => {
    setloading(true)
    const picUrl = await UploadImage()

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `http://localhost:5000/api/user`,
        {
          name: fullname,
          email,
          password,
          pic: picUrl,
        },
        config
      )
      console.log(data)
      setloading(false)
      changeTo()
      // router.push('/')
    } catch (error) {
      setloading(false)
      alert(error.response.data.message)
    }

    setemail('')
    setfullname('')
    setpic('')
    setfileName('')
  }

  return (
    <div className="bg-grey-lighter flex  flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <input
            value={fullname}
            onChange={(e) => {
              setfullname(e.target.value)
            }}
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            type="text"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            type="password"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="password"
            placeholder="Password"
          />
          <input
            onClick={addImageToPost}
            type="file"
            className="border-grey-light mb-4 block w-full rounded border p-3"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            onClick={SignUp}
            className="text-md mb-4 block w-full rounded bg-green-500 p-3 text-gray-700"
          >
            {!loading && <h2>Sign up</h2>}
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
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
