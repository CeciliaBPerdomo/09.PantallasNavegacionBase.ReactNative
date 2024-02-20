import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const CardCategory = ({ item, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("ProductsByCategory", { category: item })}>
            <ShadowPrimary style={styles.container}>
                <Text style={styles.texto}>
                    {item}
                </Text>
            </ShadowPrimary>
        </Pressable>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.green2,
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 20,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center"
    },

    texto: {
        fontSize: 16,
        fontFamily: fonts.JosefinSlabBold
    }
})