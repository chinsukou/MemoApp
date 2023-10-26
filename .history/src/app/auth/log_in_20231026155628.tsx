import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='Email addres' />
        <TextInput style={styles.input} value='Password' />
        <View>
          <Text>Submit</Text>
        </View>
        <View>
          <Text>Not register</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff'
  }
})

export default LogIn
