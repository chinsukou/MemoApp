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
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Submit</Text>
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
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  buttonn: {
    backgroundColor: '#467FD3'
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight:32,
    color: '#ffffff'
  }
})

export default LogIn
