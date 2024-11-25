import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Flex } from '../../node_modules/lightningcss/node/ast.d';

const Header = () => {
  return (
    <View>
        <View style={styles.container}>
            <Ionicons name="menu-outline" size={30} color="#000" />
            <Text style={styles.text}>Restaurante da Josy</Text>
            <Ionicons name="add-outline" size={30} color="#000" />
        </View>
        <Text style={styles.name}>Maria</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 86,
        alignItems: "center",
        justifyContent:"space-between",
        padding: 0,
        marginTop: 15

    },
    text: {
        fontSize: 20,
        fontWeight: "semibold",

    },
    name: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 18,
        color: "#ccc",
        padding: 2,
        backgroundColor: "#2a374d",
        borderRadius: 8
    }
})