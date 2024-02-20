import { StyleSheet, StatusBar } from 'react-native'

import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'

import MainNavigation from './src/navigation/MainNavigation'


const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  if (!fontsLoaded) return null //Si no esta cargada que no devuelva nada

  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle={"dark-content"}
      />

    <MainNavigation />
    </>
  )
}

export default App
