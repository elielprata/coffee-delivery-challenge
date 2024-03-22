import { MapPin } from 'phosphor-react-native'
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { Cart } from '../Cart'
import { styles } from './styles'
import { THEME } from '@/styles/themes'

type NavbarProps = {
  scrollY: any
}

export function Navbar({ scrollY }: NavbarProps) {
  const animatedNavbarStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollY.value,
      [0, 300],
      [THEME.COLORS.GRAY_900, THEME.COLORS.GRAY_100]
    ),
  }))

  const animatedNavbarTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      scrollY.value,
      [0, 300],
      [THEME.COLORS.GRAY_100, THEME.COLORS.GRAY_900]
    ),
  }))

  return (
    <Animated.View style={[styles.navbar, animatedNavbarStyle]}>
      <View style={styles.locationView}>
        <MapPin weight="fill" color={THEME.COLORS.PURPLE} />
        <Animated.Text style={[styles.locationText, animatedNavbarTextStyle]}>
          Porto Alegre, RS
        </Animated.Text>
      </View>

      <Cart />
    </Animated.View>
  )
}
