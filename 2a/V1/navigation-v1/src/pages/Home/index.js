import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

export default function Home(){

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button 
                title="Ir pra Sobre"
                onPress={() => navigation.navigate('Sobre')}
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
