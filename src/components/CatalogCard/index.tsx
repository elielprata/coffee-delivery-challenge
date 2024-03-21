import { Image, Text, View } from 'react-native'
import { styles } from './styles'

import TradicionalPNG from '@/assets/coffe-images/Expresso Cremoso.png'

export function CatalogCard() {
  return (
    <View style={styles.container}>
      <Image source={TradicionalPNG} style={styles.image} />
      <View>
        <Text style={styles.infoName}>Expresso Tradicional</Text>
        <Text style={styles.infoDescription}>
          O tradicional café feito com água quente e grãos moídos
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceSymbol}>R$</Text>

          <Text style={styles.priceValue}>9,90</Text>
        </View>
      </View>
    </View>
  )
}
