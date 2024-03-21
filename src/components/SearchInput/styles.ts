import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.GRAY_800,
  },
  textInput: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
    color: THEME.COLORS.GRAY_300,
  },
})
