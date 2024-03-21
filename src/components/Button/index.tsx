import { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native'
import { styles } from './styles'
import { Trash, IconProps } from 'phosphor-react-native'
import { THEME } from '@/styles/themes'

type ButtonProps = TouchableHighlightProps & {
  children: ReactNode
  variant?: 'default' | 'purple' | 'yellow' | 'remove'
}

type ButtonTextProps = {
  children: ReactNode
}

type ButtonIconProps = {
  icon: ({}: IconProps) => React.JSX.Element
}

function Button({ children, variant = 'default' }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.defaultPressed,
        variant === 'remove' &&
          (pressed ? styles.defaultPressed : styles.remove),
        variant === 'purple' &&
          (pressed ? styles.purplePressed : styles.purple),
        variant === 'yellow' &&
          (pressed ? styles.yellowPressed : styles.yellow),
      ]}
    >
      {children}
    </Pressable>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return <Text style={styles.text}>{children}</Text>
}

function ButtonIcon({ icon }: ButtonIconProps) {
  const Icon = icon
  return <Icon size={20} color={THEME.COLORS.PURPLE} />
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
