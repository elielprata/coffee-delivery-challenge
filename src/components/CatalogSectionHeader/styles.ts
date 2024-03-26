import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    minHeight: 18,
    maxHeight: 18,
    paddingHorizontal: 32,
  },
  title: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.XS,
    color: THEME.COLORS.GRAY_600,
  },
})
