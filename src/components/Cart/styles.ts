import { THEME } from '@/styles/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE,
    borderRadius: 18,
  },
  badgeText: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONTS.SIZES.TEXT.XS,
  },
})
