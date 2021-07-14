/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'

export default () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.brand}>bandza</Text>
            </View>
            <View>
                <Text style={styles.title}>Made by you</Text>
            </View>
            <TouchableHighlight style={styles.btn}>
                <Text style={styles.centerText}>Continue</Text>
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
        marginTop: 40,
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        color: '#8D966D',
        fontSize: 24,
    },
    btn: {
        backgroundColor: '#8D966D',
        marginTop: 10,
        width: Dimensions.get('window').width - 30,
        borderRadius: 28,
        marginTop: 160,
        alignItems: 'center',
        padding: 10
    },
    centerText: {
        color: '#fff',
        fontSize: 22,
    }
})