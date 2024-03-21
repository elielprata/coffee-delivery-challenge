import { MagnifyingGlass } from 'phosphor-react-native'
import { TextInput, View } from 'react-native'
import { styles } from './styles'
import { THEME } from '@/styles/themes'
import { useState } from 'react'

type SearchInputProps = {
  value: string
  onChange: () => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <MagnifyingGlass
        size={16}
        color={
          value.length > 0
            ? THEME.COLORS.YELLOW_DARK
            : isFocused
            ? THEME.COLORS.YELLOW
            : THEME.COLORS.GRAY_600
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={THEME.COLORS.GRAY_600}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  )
}
