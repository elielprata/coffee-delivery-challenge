import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    gap: 12,
    width: '100%',
    backgroundColor: THEME.COLORS.GRAY_100,
  },
  title: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.SM,
    color: THEME.COLORS.GRAY_700,
  },
  tagsView: {
    flexDirection: 'row',
    gap: 8,
  },
})
