import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import Headers from '../components/Headers'
import products from "../utils/data/productos.json"
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/wrappers/Search'

const ProductsByCategory = ({ route, navigation }) => {
const {categorySelected} = route.params

  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyWord, setKeyWord] = useState("")

  useEffect(() => {

    if (categorySelected) {
      setProductsFiltered(products.filter(product => product.category === categorySelected))
    }

    if (keyWord) {
      setProductsFiltered(productsFiltered.filter(product => {
        const productTitleLower = product.title.toLowerCase()
        const keyWordLower = keyWord.toLowerCase()
        return productTitleLower.includes(keyWordLower)
      }
      ))
    }

  }, [categorySelected, keyWord])

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }

  return (
    <>
      <Search handlerKeyWord={handlerKeyWord} />

      <FlatList
        style={styles.container}
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductByCategory
          item={item}
          navigation={navigation}
        />}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {},
})