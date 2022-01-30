// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRIRDYKhzdxMx8fYJfl_0zVUgO_yLQcjA',
  authDomain: 'chat-5af56.firebaseapp.com',
  projectId: 'chat-5af56',
  storageBucket: 'chat-5af56.appspot.com',
  messagingSenderId: '742668577435',
  appId: '1:742668577435:web:6ad49ec8a90d11078bf43e',
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)
export const storage = getStorage(app)
export default firestore
