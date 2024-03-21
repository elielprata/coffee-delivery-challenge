import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  number: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.MD,
    color: THEME.COLORS.GRAY_900,
  },
  button: {
    padding: 8,
    borderRadius: 6,
  },
  buttonPressed: {
    backgroundColor: THEME.COLORS.GRAY_300,
  },
})
