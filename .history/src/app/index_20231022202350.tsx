import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }

})

export default Index
