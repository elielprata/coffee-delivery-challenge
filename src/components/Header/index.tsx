import { Image, Text } from 'react-native'
import Animated, {
  Extrapolation,
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { styles } from './styles'

import { SearchInput } from '../SearchInput'
import { Carrousel } from '../Carrousel'

import CoffeeBeans from '@/assets/coffee-beans.png'
import { THEME } from '@/styles/themes'

type HeaderProps = {
  scrollY: SharedValue<number>
}

export function Header({ scrollY }: HeaderProps) {
  const animatedHeaderStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollY.value,
      [0, 300],
      [THEME.COLORS.GRAY_900, THEME.COLORS.GRAY_600]
    ),
  }))

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.intro, animatedHeaderStyle]}>
        <Text style={styles.title}>
          Find the perfect coffee for any time of day
        </Text>

        <SearchInput value="" onChange={() => {}} />

        <Image source={CoffeeBeans} style={styles.image} />
      </Animated.View>
      <Carrousel />
    </Animated.View>
  )
}
