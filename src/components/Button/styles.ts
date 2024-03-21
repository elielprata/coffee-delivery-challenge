import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 36,
    maxHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 8,
  },
  text: {
    fontFamily: THEME.FONTS.FAMILY.BUTTON,
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
    lineHeight: THEME.FONTS.SIZES.TEXT.SM * 1.6,
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase',
  },

  defaultPressed: {
    backgroundColor: THEME.COLORS.GRAY_300,
  },
  remove: {
    backgroundColor: THEME.COLORS.GRAY_400,
  },
  purple: {
    minWidth: 132,
    paddingVertical: 12,
    maxHeight: 46,
    minHeight: 46,
    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },
  purplePressed: {
    minWidth: 132,
    paddingVertical: 12,
    maxHeight: 46,
    minHeight: 46,
    backgroundColor: THEME.COLORS.PURPLE,
  },
  yellow: {
    minWidth: 132,
    paddingVertical: 12,
    maxHeight: 46,
    minHeight: 46,
    backgroundColor: THEME.COLORS.YELLOW_DARK,
  },
  yellowPressed: {
    minWidth: 132,
    paddingVertical: 12,
    maxHeight: 46,
    minHeight: 46,
    backgroundColor: THEME.COLORS.YELLOW,
  },
})
