import { View, Text, StyleSheet, Pressable } from 'react-native';

export function Options({ title, func = '', cor = "#999" }) {
    return (
        <Pressable style={[styles.container, { backgroundColor: cor }]} onPress={func}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
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

