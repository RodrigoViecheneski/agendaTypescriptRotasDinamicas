import { Link, router, Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";

export default function Screen() {
    const { id } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: 'Perfil' + id }} />
            <Text>TELA DO PERFIL {id}</Text>
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
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});