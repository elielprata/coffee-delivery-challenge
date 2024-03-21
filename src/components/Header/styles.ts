import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 552,
  },
  intro: {
    height: 342,
    backgroundColor: THEME.COLORS.GRAY_900,
    paddingHorizontal: 32,
  },
  navbar: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
