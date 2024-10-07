import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text>Esta tela é sobre mim!!</Text>
            <Link href="/" asChild>
               <Pressable style={styles.button}>
                    <Text>Ir para Home</Text>
                </Pressable> 
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#00FF00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});