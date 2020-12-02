import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function ForgotPasswordScreen(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>{props.navigation.goBack()}}>
                <Image source={require('../imgs/left-arrow.png')} style={styles.iconBack}/>
            </TouchableOpacity>
            <View style={styles.textGroup}>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 28}}>ลืมรหัสผ่าน ? </Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, marginTop: 10}}>กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน</Text>
            </View>
            <View style={styles.textInputGroup , {marginTop: 50}}>
                <TextInput
                    style={styles.textInput}
                    placeholder="อีเมล / เบอร์โทรศัพท์"
                />
           </View>
           <View style={styles.buttonGroup, {marginTop: 30}}>
                <TouchableOpacity style={styles.buttonOrange} activeOpacity={0.6} onPress={()=>{props.navigation.navigate("Complete")}}>
                    <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Kanit-Regular',}}>ส่ง</Text>
                </TouchableOpacity>
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
        marginTop: 20,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start'
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
        textAlign: 'center',
    },
});
