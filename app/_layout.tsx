import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
           headerShown: true, //tira o cabeçalho
           headerStyle: {
            backgroundColor: '#ff2598',
           },
           headerTintColor: '#F2F1F3',
           headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30

           }
        }}>
            <Stack.Screen name="index" options={{title: 'Home'}} />
            <Stack.Screen name="about" options={{title: 'Sobre'}} />
            <Stack.Screen name="(aux)/termos" options={{title: 'Termos de Uso'}} />
            <Stack.Screen name="auth/login" options={{title: 'Login'}} />
            <Stack.Screen name="profile/[id]" />
        </Stack>
    );
} 


