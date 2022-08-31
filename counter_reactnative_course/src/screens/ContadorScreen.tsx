import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setcontador] = useState(10);
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <Fab
                title="+1"
                onPress={() => setcontador(contador + 1)}
            />
            <Fab
                title="-1"
                position='bl'
                onPress={() => setcontador(contador - 1)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        top: -15,
        textAlign: 'center',
    },
})