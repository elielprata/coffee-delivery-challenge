import { Text, View } from 'react-native'

import { Tag } from '../Tag'
import { styles } from './styles'
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { THEME } from '@/styles/themes'

type CatalogHeaderProps = {
  catalogHeaderAnimatedStyle?: {}
}

export function CatalogHeader({
  catalogHeaderAnimatedStyle,
}: CatalogHeaderProps) {
  return (
    <Animated.View style={[styles.container, catalogHeaderAnimatedStyle]}>
      <Text style={styles.title}>Our coffees</Text>

      <View style={styles.tagsView}>
        <Tag title="Traditional" isSelected />
        <Tag title="Sweet" />
        <Tag title="Special" />
      </View>
    </Animated.View>
  )
}
