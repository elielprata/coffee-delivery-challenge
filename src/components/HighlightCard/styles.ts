import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 208,
    height: 268,
    backgroundColor: THEME.COLORS.GRAY_200,
    borderTopStartRadius: 5,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 12,
    paddingBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: -32,
  },
  tag: {
    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 80,
  },
  tagText: {
    fontFamily: THEME.FONTS.FAMILY.TAG,
    fontSize: THEME.FONTS.SIZES.TEXT.XXS,
    color: THEME.COLORS.PURPLE,
  },
  info: {
    alignItems: 'center',
  },
  infoName: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.MD,
    color: THEME.COLORS.GRAY_800,
  },
  infoDescription: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.XS,
    color: THEME.COLORS.GRAY_600,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },
  priceSymbol: {
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
    color: THEME.COLORS.YELLOW_DARK,
  },
  priceValue: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.LG,
    color: THEME.COLORS.YELLOW_DARK,
  },
})
