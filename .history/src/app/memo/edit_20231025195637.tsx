import { View, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const Edit = (): JSX.Element => {
  return (
    <View styles={styles.container}>
      <Header />
      <View>
        <TextInput value='買い物リスト'/>
      </View>
      <CircleButton>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor: 'blue'
  }
})

export default Edit
