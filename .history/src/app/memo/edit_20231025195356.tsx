import { View, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import circleButton from '../../components/CircleButton'

const Edit = (): JSX.Element => {
  return (
    <View>
      <Header />
      <View>
        <TextInput value='買い物リスト'/>
      </View>
      <CircleButton>
        <Icon name='check' size={40} color='#ffffff'
      </CircleButton>
    </View>
  )
}

export default Edit
