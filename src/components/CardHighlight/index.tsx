import { Image, Text, View } from 'react-native'

import AmericanoPng from '@/assets/coffe-images/Americano.png'
import { styles } from './styles'

export function CardHighlight() {
  return (
    <View style={styles.container}>
      <Image source={AmericanoPng} style={styles.image} />

      <View style={styles.tag}>
        <Text style={styles.tagText}>ESPECIAL</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoName}>Americano</Text>
        <Text style={styles.infoDescription}>
          Bebida a base de café, uísque irlandês, açúcar e chantilly.
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceSymbol}>R$</Text>

        <Text style={styles.priceValue}>9,90</Text>
      </View>
    </View>
  )
}
