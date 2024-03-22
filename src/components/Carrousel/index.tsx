import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { styles } from './styles'

import { HighlightCard } from '../HighlightCard'

const DATA = [1, 2, 3]

const CARD_WIDTH = 168

export function Carrousel() {
  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    },
  })

  return (
    <Animated.ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      onScroll={scrollHandler}
    >
      {DATA.map((item, index) => {
        const inputRange = [
          (index - 1) * CARD_WIDTH,
          index * CARD_WIDTH,
          (index + 1) * CARD_WIDTH,
        ]
        const outputRange = [0.8, 1, 0.8]

        const highLightCardAnimatedStyle = useAnimatedStyle(() => ({
          transform: [
            {
              scale: interpolate(
                scrollX.value,
                inputRange,
                outputRange,
                Extrapolation.CLAMP
              ),
            },
          ],
        }))

        return (
          <HighlightCard
            highLightCardAnimatedStyle={highLightCardAnimatedStyle}
            isFirst={index === 0 ? true : false}
            isLast={index === DATA.length - 1 ? true : false}
            key={item.toString()}
          />
        )
      })}
    </Animated.ScrollView>
  )
}
