import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen(){
    return (
        <View>
            <Text style={styles.text}> Hola Mundo Home </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignItems: 'center',
        marginTop: '20%',
    },
})