import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Select() {
  return (
    <TouchableOpacity style={[styles.container, styles.selected]}>
      <Text style={[styles.text, styles.textSelected]}>{'Label'}</Text>
    </TouchableOpacity>
  )
}
