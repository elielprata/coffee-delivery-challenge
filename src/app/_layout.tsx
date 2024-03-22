import { Slot } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function MainLayout() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) {
    return
  }

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}
