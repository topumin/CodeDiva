import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function WelcomeScreen(props) {
    
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 28}}>ยินดีต้อนรับ</Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 21}}>กรุณาเลือกภาษา</Text>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.text}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={()=>{props.navigation.navigate("Login")}}>
                    <Text style={styles.text}>ไทย</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        fontFamily: 'Kanit-Bold',
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        color: '#fff',
    },
    textGroup: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start'
    },
    buttonGroup: {
        marginTop: 90,
        width: '100%',
    },
    button: {
        width: '100%',
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#f77105',
        alignItems: 'center',
        fontFamily: 'Kanit-Bold',
        fontSize: 18,
        marginBottom: 20,
    }
});