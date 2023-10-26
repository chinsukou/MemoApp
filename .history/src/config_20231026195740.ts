import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain:  process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID,
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }

EXPO_PUBLIC_FB_API_KEY=AIzaSyDZ9H5aFvHxdeDsJtIcQXrzyPrcSiJVvvw
EXPO_PUBLIC_FB_AUTH_DOMAIN=memoapp-717ee.firebaseapp.com
EXPO_PUBLIC_FB_PROJECT_ID=memoapp-717ee
EXPO_PUBLIC_FB_STORAGE_BUCKET=memoapp-717ee.appspot.com
EXPO_PUBLIC_FB_MESSAGING_SENDER_ID=570214601150
EXPO_PUBLIC_FB_APP_ID=1:570214601150:web:f41d1e390f665f1516e9ef
