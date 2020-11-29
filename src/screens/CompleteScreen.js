import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInpute } from 'react-native'

export default function CompleteScreen(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../imgs/complete.png')} style={styles.image}/>
            <View style={styles.textGroup}>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 28}}>สำเร็จ </Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, marginTop: 10}}>รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว</Text>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonOrange} activeOpacity={0.6} onPress={()=>{props.navigation.navigate("Login")}}>
                    <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Kanit-Regular',}}>ตกลง</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    text: {
        fontFamily: 'Kanit-Regular', 
        fontSize: 18,
    },
    textGroup: {
        marginTop: 60,
        marginBottom: 30,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image: {
        width: 150, 
        height: 150, 
        resizeMode: 'cover'
    },
    buttonGroup: {
        width: '100%',
        marginTop: 30,
    },
    buttonOrange: {
        width: '100%',
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#f77105',
        alignItems: 'center',
        fontFamily: 'Kanit-Bold',
        fontSize: 20,
        marginBottom: 20,
    },
});
