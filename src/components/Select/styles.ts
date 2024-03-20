import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_300,
    paddingVertical: 12,
    borderRadius: 6,
  },
  selected: {
    borderColor: THEME.COLORS.PURPLE,
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1,
  },
  text: {
    color: THEME.COLORS.GRAY_700,
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
  },
  textSelected: {
    color: THEME.COLORS.PURPLE,

    fontFamily: THEME.FONTS.FAMILY.BUTTON,
  },
})
