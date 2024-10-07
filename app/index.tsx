import { Link, router, Stack, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";

export default function Screen() {

    const navigation = useNavigation();

    const handleClick = () => {
        router.navigate('/about');
    }
    const handleHideHeader = () => {
        navigation.setOptions({
            headerShown: false
        })
    }
    const handleAddClick = () => {
        alert("Adicionado com sucesso!");
    }
    //navigate, push, replace
    /*
        navigate: cria a lista de páginas e quando necessita voltar, utiliza o 
        histórico das paginas já criadas na lista.
        push: cria a lista de páginas e quando volta recria a página que está 
        voltando.
        replace:substitui a tela quebrando o histórico. Não deixa o usuário voltar
        para tela anterior.

    */
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
               title: 'Inicio',
               headerRight: () => <Button onPress={handleAddClick} title="Adicionar"/> 
            }} />
            <Text>Opa, tudo bem?</Text>
            <Button onPress= {handleHideHeader}title="Sumir cabeçalho"/>
            <Link replace href="/about" asChild>
               <Pressable style={styles.button}>
                    <Text>Ir para Sobre</Text>
                </Pressable> 
            </Link>
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>Ir para Sobre</Text>
                </Pressable> 
                <Link href="/profile/1">Perfil 1</Link>
                <Link href="/profile/2">Perfil 2</Link>
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