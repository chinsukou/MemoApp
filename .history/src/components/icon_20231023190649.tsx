import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFont } from 'exop-font'

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcom = createIconSetFromIcoMoon(
  fontSelection,
  'IcomMoon',
  'icomoon.ttf'
)

const Icon = () => {
  return (
    <CustomIcom name='plus' size={40} color='red'
  )
}

export default Icon
