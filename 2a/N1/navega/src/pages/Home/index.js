import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title="Ir para Sobre" 
                onPress={ () => navigation.navigate('Sobre')}
            />
            <Button title="Ir para Vendas" 
                onPress={ () => navigation.navigate('Vendas')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})