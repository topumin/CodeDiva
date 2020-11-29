import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInpute, Modal } from 'react-native'


export default function CancelTouchIDScreen(props) {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={modalVisible ? styles.containerAlpha : styles.container}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalWrap}>
                        <View style={styles.top}>
                            <View style={styles.modalView}>
                                <Image source={require('../imgs/fingerprint3.png')} style={styles.iconFingerprint}/>
                                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 22}}>Touch ID for</Text>
                                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 22}}>"KMUTT Register"</Text>
                                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 14, marginTop: 5}}> เข้าใช้งานด้วย TouchID หรือ</Text>
                                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 14,}}> ยกเลิกเพื่อกลับไปใช้รหัส PIN</Text>
                            </View>
                        </View>
                        <View style={styles.down}>
                            <TouchableOpacity activeOpacity={0.6} style={{marginBottom: 8, paddingTop: 10, borderTopWidth: 1, borderColor: '#aaa', width: '100%', flexDirection: 'column', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 22, color: '#178eff',}}> Enter Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => {setModalVisible(!modalVisible);}} style={{marginBottom: 8, paddingTop: 10, borderTopWidth: 1, borderColor: '#aaa', width: '100%', flexDirection: 'column', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 22, color: '#178eff',}}> ยกเลิก</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Text style={{fontSize: 22, fontFamily: 'Kanit-Regular', marginBottom: 20,}}>กรูณากรอกรหัส PIN</Text>
            <View style={styles.pinGroup}>
                <View style={styles.smallPincode}></View>
                <View style={styles.smallPincode}></View>
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
                    <Text style={styles.number}>5</Text>
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
                <TouchableOpacity activeOpacity={0.6} onPress={() => {setModalVisible(true)}} visible={!modalVisible}>
                     <Image source={require('../imgs/fingerprint2.png')} style={styles.iconFingerprint, modalVisible ? styles.hidden : ''}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={modalVisible ? 0.05 : 0.6}>
                    <Text style={styles.number}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} visible={!modalVisible}>
                    <Image source={require('../imgs/delete.png')} style={styles.iconDelete, modalVisible ? styles.hidden : ''}/>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize: 22, fontFamily: 'Kanit-Regular', marginTop: 10,}}>ลืมรหัส PIN ?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center',
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center',
    },
    hidden: {
        height: 0,
        width: 0,
    },
    containerAlpha: {
        padding: 30,
        fontFamily: 'Kanit-Bold',
        flexDirection: 'column', 
        flex: 1,
        zIndex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000AA',
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
        zIndex: 1,
    },
    iconFingerprint:{ 
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        resizeMode: 'cover',
        zIndex: 1,
    },
    top: {
        width: '100%',
        // paddingHorizontal: 30,
        // paddingTop: 30,
        marginVertical: 15,
    },
    down: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        alignItems: "center",
        justifyContent: 'center',
    },
    modalWrap: {
        height: 323,
        width: '80%',
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconFingerprint:{ 
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        resizeMode: 'cover',
    },
});
