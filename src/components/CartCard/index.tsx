import { Image, Text, View } from 'react-native'

import Irlandes from '@/assets/coffe-images/Irlandês.png'
import { styles } from './styles'
import { Button } from '../Button'
import { Minus, Plus, Trash } from 'phosphor-react-native'
import { InputNumber } from '../InputNumber'

export function CartCard() {
  return (
    <View style={styles.container}>
      <Image source={Irlandes} style={styles.image} />

      <View style={styles.infoContainer}>
        <View style={styles.aboutView}>
          <View style={styles.infoView}>
            <Text style={styles.infoName}>Irlandês</Text>
            <Text style={styles.infoSize}>227ml</Text>
          </View>

          <Text style={styles.infoPrice}>R$ 9,90</Text>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.inputBorder}>
            <InputNumber />
          </View>
        </View>
      </View>
    </View>
  )
}
