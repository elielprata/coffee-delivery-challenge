import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 117,
    maxHeight: 117,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_300,
  },
  image: {
    width: 64,
    height: 64,
  },
  infoContainer: {
    flex: 1,
  },
  aboutView: {
    flex: 1,
    flexDirection: 'row',
    gap: 9,
  },
  infoView: {
    flex: 1,
  },
  infoName: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.MD,
    color: THEME.COLORS.GRAY_900,
  },
  infoSize: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.SM,
    color: THEME.COLORS.GRAY_600,
  },
  infoPrice: {
    fontFamily: THEME.FONTS.FAMILY.TITLE,
    fontSize: THEME.FONTS.SIZES.TITLE.SM,
    color: THEME.COLORS.GRAY_900,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontFamily: THEME.FONTS.FAMILY.TEXT,
    fontSize: THEME.FONTS.SIZES.TEXT.MD,
    color: THEME.COLORS.GRAY_900,
  },
  inputBorder: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GRAY_400,
  },
})
