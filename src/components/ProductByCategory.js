import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'

const ProductByCategory = ({ item, navigation }) => {
    const { width } = useWindowDimensions()

    return (
        <Pressable
            onPress={() => navigation.navigate("ProductDetail", {productId: item.id})}
            style={styles.container}
        >
            <Image
                source={{ uri: item.thumbnail }}
                style={styles.imagen}
                resizeMode="cover"
            />

            <Text style={[
                styles.texto,
                // Texto responsive
                width > 490 ? { fontSize: 24, fontWeight: "bold" } : { fontSize: 16 }
            ]}>
                {item.id} - {item.title}
            </Text>

        </Pressable>
    )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green3,
        width: "80%",
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    texto: {
        width: "60%",
        fontSize: 16,
        color: "white"
        //fontFamily: fonts.Josefin
    },

    imagen: {
        minHeight: 90,
        minWidth: 90,
        width: "30%",
        height: "30%",
        borderRadius: 5
    }
})