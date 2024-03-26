import { Text, View } from 'react-native'
import { styles } from './styles'

type CatalogSectionHeaderProps = {
  title: string
}

export function CatalogSectionHeader({ title }: CatalogSectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
