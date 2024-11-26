import { View, Text, StyleSheet } from 'react-native';

export function Section({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 10

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        color: "gray"
    }
})

