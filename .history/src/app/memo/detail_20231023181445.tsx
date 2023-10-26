import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>
          買い物リスト
        </Text>
        <Text style={styles.memoDate}>
          2023年10月1日 10:00
        </Text>
      </View>
      <ScrollView>
        <Text>
        買い物リスト
        書体やレイアウトなどを確認するために用います。
        本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center'
  },
  memoTitle: {

  },
  memoDate: {

  }
})

export default Detail
