import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function RequestOTPScreen(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>{props.navigation.goBack()}}>
                <Image source={require('../imgs/left-arrow.png')} style={styles.iconBack}/>
            </TouchableOpacity>
            <View style={styles.textGroup}>
                <Image source={require('../imgs/otp.png')} style={styles.image}/>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 26, marginTop: 40,}}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 26, marginTop: 10, color: '#f77105',}}>089-XXX-5155</Text>
            </View>
           <View style={styles.buttonGroup, {marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonOrange} activeOpacity={0.6} onPress={()=>{props.navigation.navigate("ConfirmOTP")}}>
                    <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Kanit-Regular',}}>ขอรหัส OTP</Text>
                </TouchableOpacity>
                <Text style={styles.smallText}>กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-111-1111</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'flex-start',
        padding: 30,
    },
    iconBack:{ 
        width: 30,
        height: 30,
        marginBottom: 20,
        resizeMode: 'cover',

    },
    text: {
        fontFamily: 'Kanit-Regular', 
        fontSize: 18,
    },
    smallText: {
        fontFamily: 'Kanit-Regular', 
        fontSize: 12,
        color: '#bbb',
    },
    textInput: {
        height: 50, 
        fontFamily: 'Kanit-Regular',
        color: '#333',
        fontSize: 18,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 22,
    },
    textGroup: {
        marginTop: 120,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 40,
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
    image: {
        width: 60, 
        height: 60, 
        resizeMode: 'cover'
    },
});
