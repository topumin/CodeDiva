import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'


export default function ConfirmOTPScreen(props) {

    const [seconds, setSeconds] = React.useState(60);

    React.useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          setSeconds('0');
        } 
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>{props.navigation.goBack()}}>
                <Image source={require('../imgs/left-arrow.png')} style={styles.iconBack}/>
            </TouchableOpacity>
            <View style={styles.textGroup}>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 28}}>ยืนยันตัวตน </Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, marginTop: 10}}>กรุณากรอกรหัสยืนยันที่เราส่งให้คุณ</Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, marginTop: 10}}>089-XXX-5155</Text>
            </View>
            <View style={styles.textInputNumberGroup}>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder= '9'
                    maxLength={1} 
                    returnKeyType='next'
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    />
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder= '9'
                    maxLength={1} 
                    ref={(input) => { this.secondTextInput = input; }}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    />
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder= '9'
                    maxLength={1} 
                    ref={(input) => { this.thirdTextInput = input; }}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    />
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder= '9'
                    maxLength={1} 
                    ref={(input) => { this.fourthTextInput = input; }}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                    />
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder= '9'
                    maxLength={1} 
                    ref={(input) => { this.fifthTextInput = input; }}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.sixthTextInput.focus(); }}
                    />
                <TextInput 
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder= '9'
                    maxLength={1} 
                    ref={(input) => { this.sixthTextInput = input; }}
                    />
            </View>
            <View style={styles.textGroup, {marginTop: 60, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18}}>หากคุณไม่ได้รับรหัสผ่าน </Text>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 18, marginTop: 10, color: '#f77105'}}>ส่งรหัสใหม่ ({seconds})</Text>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonOrange} activeOpacity={0.6} onPress={()=>{props.navigation.goBack()}}>
                    <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Kanit-Regular',}}>ยืนยันรหัส OTP</Text>
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
    buttonGroup: {
        width: '100%',
        marginTop: 30,
    },
    textInput: {
        paddingHorizontal: 4,
        height: 65, 
        width: 30,
        fontFamily: 'Kanit-Regular',
        color: '#333',
        fontSize: 30,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    textInputNumberGroup: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
