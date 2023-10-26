import { Redirect, router } from 'expo-router'
import { onAuthStateChange } from 'firebase/auth'
import { useEffect } from 'react'

import { auth } from '../config'

const Index = (): JSX.Element => {
  useEffect(() => {
    onAuthStateChange(auth, (user) => {
      if (user !== null) {
        router.replace('/memo/list')
      }
    })
  }, [])

  return <Redirect href='auth/sign_up' />
}

export default Index
