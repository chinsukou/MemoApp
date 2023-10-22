import { JSXElementConstructor } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const memoListItem = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}
