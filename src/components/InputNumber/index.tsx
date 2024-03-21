import { Minus, Plus } from 'phosphor-react-native'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { THEME } from '@/styles/themes'

export function InputNumber() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Minus size={20} color={THEME.COLORS.PURPLE} />
      </Pressable>

      <Text style={styles.number}>4</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Plus size={20} color={THEME.COLORS.PURPLE} />
      </Pressable>
    </View>
  )
}
