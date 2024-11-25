import { View, Text, StyleSheet } from 'react-native';

export  function Options({title, cor = "#999"}) {
 return (
   <View style={[styles.container, { backgroundColor: cor}]}>
    <Text style={styles.title}>{title}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 100,
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        marginBottom: 8

    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})

