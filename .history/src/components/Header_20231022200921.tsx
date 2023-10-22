import { View, Text } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
    <View style={styles.headerInner}>
      <Text style={styles.headerTitle}>Memo App</Text>
      <Text style={styles.headerRight}>ログアウト</Text>
    </View>
  </View>  )
}
