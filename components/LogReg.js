import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'

export default () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.brand}>bandza</Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Buy local products
                    Sell your products online
                </Text>
            </View>
            <TouchableHighlight style={styles.btn}>
                <Text style={styles.centerText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn2}>
                <Text style={styles.centerText}>Register</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        color: '#8D966D',
        fontSize: 64,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 30,
        color: '#8D966D',
        fontSize: 24,
        marginBottom: 120,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#8D966D',
        width: Dimensions.get('window').width - 30,
        borderRadius: 28,
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
    },
    btn2: {
        backgroundColor: '#8D966D',
        width: Dimensions.get('window').width - 30,
        borderRadius: 28,
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
        marginTop: 30
    },
    centerText: {
        color: '#fff',
        fontSize: 22,
    }
})