import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Fab } from '../components/Fab';

export const TareaScreen = () => {

    const [contador, setcontador] = useState(10);

    return (
        <View style={styles.container}>
            <View style={styles.dibujo}>
                <View style={styles.cajaMorada} />
                <View style={styles.cajaNaranja} />
                <View style={styles.cajaAzul} />
            </View>
            <View style={styles.contador}>
                <Text style={styles.title}>
                    Contador: {contador}
                </Text>

                <Fab
                    title="+1"
                    onPress={() => setcontador(contador + 1)}
                />

                <Fab
                    title="-1"
                    position="bl"
                    onPress={() => setcontador(contador - 1)}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    dibujo: {
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    contador: {
        backgroundColor: '#28425B',
        flex: 2,
        justifyContent: 'center'
    },
    cajaMorada: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end',
        // top: 100
    },
    cajaNaranja: {
        // flex: 2,
        width: 100,
        height: 100,
        // flex: 1, 
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center'
        top: 50
    },
    cajaAzul: {
        // flex: 4,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start',
    },
    title: {
        fontSize: 40,
        top: -15,
        textAlign: 'center',
        color: '#0080ff'
        //justifyContent: 'flex-end'
    },
});