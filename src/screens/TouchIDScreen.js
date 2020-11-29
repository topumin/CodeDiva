import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function TouchIDScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 28}}>Touch ID</Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, marginTop: 10}}>ตั้งค่าล็อคอินด้วยลายนิ้วมือ</Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, marginTop: 10, marginBottom: 120}}>เพื่อการเข้าถึงที่รวดเร็ว</Text>
            </View>
            <View style={styles.buttonGroup}>
                <Image source={require('../imgs/fingerprint.png')} style={styles.image}/>
                <TouchableOpacity style={styles.buttonOrange} activeOpacity={0.6}>
                    <Text style={{fontSize: 18, fontFamily: 'Kanit-Regular', color: '#fff'}}>ตั้งค่าลายนิ้วมือ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTransparent} activeOpacity={0.6} onPress={()=>{props.navigation.navigate("CancelTouchID")}}>
                    <Text style={{color: '#f77105', fontSize: 18, fontFamily: 'Kanit-Regular',}}>ข้าม</Text>
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
    buttonTransparent: {
        width: '100%',
        borderRadius: 6,
        padding: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        fontFamily: 'Kanit-Bold',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonGroup: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 150, 
        height: 150, 
        resizeMode: 'cover',
        marginBottom: 120,
    },
});
