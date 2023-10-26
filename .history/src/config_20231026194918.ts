import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDZ9H5aFvHxdeDsJtIcQXrzyPrcSiJVvvw',
  authDomain: 'memoapp-717ee.firebaseapp.com',
  projectId: 'memoapp-717ee',
  storageBucket: 'memoapp-717ee.appspot.com',
  messagingSenderId: '570214601150',
  appId: '1:570214601150:web:f41d1e390f665f1516e9ef'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
