import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contato(){
    return(
        <View style={styles.container}>
            <Text>Entre em contato</Text>
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