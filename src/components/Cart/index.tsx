import { ShoppingCart } from 'phosphor-react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { THEME } from '@/styles/themes'

export function Cart() {
  return (
    <View style={styles.container}>
      <ShoppingCart
        color={true ? THEME.COLORS.PURPLE : THEME.COLORS.YELLOW}
        weight="fill"
      />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{3}</Text>
      </View>
    </View>
  )
}
