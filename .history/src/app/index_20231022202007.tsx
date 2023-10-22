import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'
import memoListItem from '../components/MemoListItem'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>

        <MemoListItem />

      </View>

      <View style={styles.circleBotton}>
        <Text style={styles.circleBottonLabel}>+</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  circleBotton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleBottonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index
