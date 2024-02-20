import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import { useState } from 'react'

import Home from './src/screen/Home'
import ProductsByCategory from './src/screen/ProductsByCategory'
import ProductDetail from './src/screen/ProductDetail'

import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'

//Navegacion
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headers from './src/components/Headers'

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  if (!fontsLoaded) return null //Si no esta cargada que no devuelva nada

  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle={"dark-content"}
      />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={({ route, navigation }) => {
            return {
              header: () => {
                return <Headers
                  navigation={navigation}
                  title={route.name === "Home" ? "Mi e-commerce" :
                    route.name === "ProductsByCategory" ? route.params.categorySelected :
                      "Detalle producto"
                  } />
              }
            }
          }}
        >

          <Stack.Screen
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="ProductsByCategory"
            component={ProductsByCategory}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})