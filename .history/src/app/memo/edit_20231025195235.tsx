import { View, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const Edit = (): JSX.Element => {
  return (
    <View>
      <Header />
      <View>
        <TextInput value='買い物リスト'/>
      </View>
    </View>
  )
}

export default Edit
