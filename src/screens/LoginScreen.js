import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, CheckBox} from 'react-native'

export default function LoginScreen(props) {

    return (
       <View style={styles.container}>
           <Image source={require('../imgs/kmutt_logo.png')} style={{width: '100%', height: 110, marginBottom: 40, justifyContent: 'center'}}/>
           <View style={styles.textInputGroup}>
                <TextInput
                    style={styles.textInput}
                    placeholder="ชื่อผู้ใช้งาน"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="รหัสผ่าน"
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40, alignItems: 'center', width: '100%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <CheckBox
                             value={false}
                        />
                        <Text style={styles.smallText}>
                            บันทึกข้อมูลเข้าสู่ระบบ
                        </Text>
                    </View>
                    <Text 
                        style={styles.smallText} 
                        onPress={()=>{props.navigation.navigate("Forgot")}}>
                        ลืมรหัสผ่าน ?
                    </Text>
                </View>
           </View>

           <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonOrange} activeOpacity={0.6}>
                    <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Kanit-Regular',}}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
                <View style={{height: 55, position: 'relative', flexDirection: 'column', alignItems: 'center',}}>
                    <Text style={{fontSize: 16, fontFamily: 'Kanit-Regular', color: '#aaa', backgroundColor: '#f2f2f2', textAlign: 'center', zIndex: 2, width: '33%', }}>
                        ไม่มีบัญชีผู้ใช้
                    </Text>
                    <Text style={{borderBottomColor: '#aaa', borderBottomWidth: 2, position: 'absolute', width: '100%', top: -9}}>

                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonTransparent} activeOpacity={0.6} onPress={()=>{props.navigation.navigate("Login")}}>
                    <Text style={{color: '#f77105', fontSize: 16, fontFamily: 'Kanit-Regular',}}>เปิดบัญชีเพื่อลงทะเบียนผู้ใช้</Text>
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
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    text: {
        fontFamily: 'Kanit-Regular', 
        fontSize: 18,
    },
    smallText: {
        fontFamily: 'Kanit-Regular', 
        fontSize: 16,
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
    textInputGroup: {
        
    },
    buttonGroup: {
        width: '100%',
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
    buttonTransparent: {
        width: '100%',
        borderRadius: 6,
        padding: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#f77105',
        alignItems: 'center',
        fontSize: 20,
        marginBottom: 20,
    }
});
