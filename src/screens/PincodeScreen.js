import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInpute } from 'react-native'


export default function PincodeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22, fontFamily: 'Kanit-Regular', marginBottom: 20,}}>ตั้งรหัส PIN CODE</Text>
            <View style={styles.pinGroup}>
                <View style={styles.smallPincodeActive}></View>
                <View style={styles.smallPincodeActive}></View>
                <View style={styles.smallPincode}></View>
                <View style={styles.smallPincode}></View>
                <View style={styles.smallPincode}></View>
                <View style={styles.smallPincode}></View>
            </View>
            <View style={styles.keypad}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.keypad}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} onPress={()=>{props.navigation.navigate("TouchID")}}>
                    <Text style={styles.numberActive}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.keypad}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.keypad}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.numberDummy}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.number}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={require('../imgs/delete.png')} style={styles.iconDelete}/>
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
    pinGroup: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 60,
    },  
    smallPincode: {
        width: 20, 
        height: 20, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#333'
    },
    smallPincodeActive: {
        width: 20, 
        height: 20, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#f77105',
        backgroundColor: '#f77105',
    },
    number: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        borderWidth: 1, 
        borderColor: '#333',
        fontSize: 30,
    },
    numberActive: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        borderWidth: 1, 
        borderColor: '#f77105',
        backgroundColor: '#f77105',
        color: '#fff',
        fontSize: 30,
    }, 
    numberDummy: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        borderWidth: 1, 
        borderColor: 'transparent',
        fontSize: 28,
        color: 'transparent',
    },
    keypad: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 15,
    },
    iconDelete:{ 
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 30,
        resizeMode: 'cover',
    },
});
