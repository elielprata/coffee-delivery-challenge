import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    marginVertical: 12,
    fontFamily: THEME.FONTS.FAMILY.BUTTON,
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
    lineHeight: THEME.FONTS.SIZES.TEXT.SM * 1.6,
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase',
  },
  iconView: {
    margin: 8,
  },
  purple: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },
  purplePressed: {
    backgroundColor: THEME.COLORS.PURPLE,
  },
  yellow: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,
  },
  yellowPressed: {
    backgroundColor: THEME.COLORS.YELLOW,
  },
})
