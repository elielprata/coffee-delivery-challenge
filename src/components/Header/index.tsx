import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import { MapPin } from 'phosphor-react-native'
import { THEME } from '@/styles/themes'
import { Cart } from '../Cart'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchInput } from '../SearchInput'

import CoffeeBeans from '@/assets/coffee-beans.png'
import { CardHighlight } from '../CardHighlight'

export function Header() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.intro}>
        <View style={styles.navbar}>
          <View style={styles.locationView}>
            <MapPin weight="fill" color={THEME.COLORS.PURPLE} />
            <Text style={styles.locationText}>Porto Alegre, RS</Text>
          </View>

          <Cart />
        </View>

        <Text style={styles.title}>
          Find the perfect coffee for any time of day
        </Text>

        <SearchInput value="" onChange={() => {}} />

        <Image source={CoffeeBeans} style={styles.image} />
      </SafeAreaView>

      <View
        style={{
          top: 253,
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 32,
          height: 323,
        }}
      >
        <CardHighlight />
        <CardHighlight />
        <CardHighlight />
      </View>
    </View>
  )
}
