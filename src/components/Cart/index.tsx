import { ShoppingCart } from 'phosphor-react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { THEME } from '@/styles/themes'

export function Cart() {
  const qtd = 0
  return (
    <View style={styles.container}>
      <ShoppingCart
        color={qtd > 0 ? THEME.COLORS.PURPLE : THEME.COLORS.YELLOW}
        weight="fill"
      />
      {qtd > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{3}</Text>
        </View>
      )}
    </View>
  )
}
