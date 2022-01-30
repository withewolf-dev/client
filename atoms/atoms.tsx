import { atom } from 'recoil'

export const LoginUiState = atom({
  key: 'loginUiState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})

export const CurrentUser = atom({
  key: 'currentUser',
  default: {},
})
