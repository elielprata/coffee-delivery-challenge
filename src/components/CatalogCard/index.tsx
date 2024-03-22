import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

import TradicionalPNG from '@/assets/coffe-images/Expresso Cremoso.png'

type CoffeeInfo = {
  name: string
  description: string
}

type CatalogCardProps = {
  data: CoffeeInfo
}

export function CatalogCard({ data }: CatalogCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Image source={TradicionalPNG} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoName}>{data.name}</Text>
          <Text style={styles.infoDescription}>{data.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.priceSymbol}>R$</Text>

            <Text style={styles.priceValue}>9,90</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
