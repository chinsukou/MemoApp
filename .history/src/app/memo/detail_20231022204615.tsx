import { View, Text, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const Detail = (): JSX.Element => {
  return (
    <View>
      <Header />
      <View>
      <Text>
          買い物リスト
        </Text>
        <Text>
          2023年10月1日 10:00
        </Text>
      </View>
      <View>
        <Text>
        買い物リスト
        書体やレイアウトなどを確認するために用います。
        本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </View>
    </View>
  )
}

export default Detail
