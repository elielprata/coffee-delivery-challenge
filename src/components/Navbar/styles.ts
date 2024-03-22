import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 32,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
    color: THEME.COLORS.GRAY_100,
  },
  title: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.MD,
    color: THEME.COLORS.WHITE,
    marginBottom: 15,
  },
  image: {
    height: 83,
    width: 83,
    alignSelf: 'flex-end',
  },
})
