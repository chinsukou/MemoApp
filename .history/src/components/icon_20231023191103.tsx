import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from 'expo-font'

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcom = createIconSetFromIcoMoon(
  fontSelection,
  'IcoMoon',
  'icomoon.ttf'
)

const Icon = (): JSX.Element => {
  return (
    <CustomIcom name='plus' size={40} color='red' />
  )
}

export default Icon
