import { StyleSheet, Text, View, FlatList } from 'react-native'
import Headers from '../components/Headers'
import Categories from '../components/Categories'


const Home = ({navigation}) => {

    return (
        <View>
            <Categories navigation={navigation}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})