import { StyleSheet, Text, View, Pressable, Platform, StatusBar } from 'react-native'
import colors from '../utils/global/colors'
import { AntDesign } from "@expo/vector-icons" //Iconos

const Headers = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            {/* No se puede volver para atras en la primera pantalla */}
            {navigation.canGoBack() &&
            <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </Pressable>
            }
            <Text style={styles.text}>
                {title}
            </Text>

        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        height: 90,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,    // altura dependiendo de la plataforma
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },

    text: {
        fontSize: 30,
    },

    goBack: {
        position: "absolute",
        left: 10, 
        bottom: 15
    }
})