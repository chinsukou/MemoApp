import { View, Text, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Log In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default LogIn
