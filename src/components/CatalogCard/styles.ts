import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.GRAY_200,
    borderTopStartRadius: 5,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 30,
    paddingStart: 8,
    paddingEnd: 16,
    paddingVertical: 16,
    gap: 12,
  },
  image: {
    width: 96,
    height: 96,
    marginTop: -32,
  },
  infoContainer: {
    flex: 1,
  },
  infoName: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.SM,
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
    fontSize: THEME.FONTS.SIZES.TEXT.XXS,
    color: THEME.COLORS.YELLOW_DARK,
  },
  priceValue: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.LG,
    color: THEME.COLORS.YELLOW_DARK,
  },
})
