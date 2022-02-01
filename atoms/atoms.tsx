import { atom } from 'recoil'
import { Socket } from 'socket.io-client'

export const LoginUiState = atom({
  key: 'loginUiState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})

export const CurrentUser = atom({
  key: 'currentUser',
  default: {},
})

export const SearchTerm = atom({
  key: 'searchTerm',
  default: '',
})

export const Chat = atom({
  key: 'chat',
  default: [],
})

export const LoadingChat = atom({
  key: 'loadingChat',
  default: false,
})

export const ChatInstance = atom({
  key: 'chatInstance',
  default: {},
})

export const LoadChatWindow = atom({
  key: 'loadChatWindow',
  default: false,
})

export const Messages = atom({
  key: 'messages',
  default: [],
})

export const SocketAtom = atom({
  key: 'socket',
  default: {},
})
