import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Abas(){
    return(
        <View style={styles.container}>
            <Text>Tela Abas</Text>
            <Text>Não fui eu quem escolheu esse nome</Text>
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