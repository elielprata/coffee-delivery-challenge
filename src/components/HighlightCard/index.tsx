import { Image, StyleProp, Text, View, ViewStyle } from 'react-native'

import AmericanoPng from '@/assets/coffe-images/Americano.png'
import { styles } from './styles'
import Animated from 'react-native-reanimated'

type HighlightCardProps = {
  highLightCardAnimatedStyle: StyleProp<ViewStyle>
  isFirst: boolean
  isLast: boolean
}

export function HighlightCard({
  highLightCardAnimatedStyle,
  isFirst = false,
  isLast = false,
}: HighlightCardProps) {
  return (
    <Animated.View
      style={[
        styles.container,
        highLightCardAnimatedStyle,
        { marginLeft: isFirst ? 32 : 0, marginRight: isLast ? 32 : 0 },
      ]}
    >
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
    </Animated.View>
  )
}
