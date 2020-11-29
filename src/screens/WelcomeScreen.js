import React, { Component, useState } from 'react'

import { Text, View, StyleSheet, TouchableOpacity, Modal, Image, Dimensions, ScrollView } from 'react-native'

export default function WelcomeScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={modalVisible ? styles.containerAlpha : styles.container}>
            <View style={styles.textGroup}>
                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 28}}>ยินดีต้อนรับ</Text>
                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 21}}>กรุณาเลือกภาษา</Text>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.text}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => {
                    setModalVisible(true);
                }}>
                    <Text style={styles.text}>ไทย</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView ,{position: 'absolute', bottom: 0, width: '100%'}}>
                    <View style={styles.modalView}>
                        <View style={{borderBottomColor: '#aaa', borderBottomWidth: 1, width: '100%', marginBottom: 20,}}>
                            <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'flex-start', width: '100%'}}>
                                <Image source={require('../imgs/file.png')} style={{width: 30, height: 30, marginRight: 12}}/>
                                <Text style={styles.heading2}>เงื่อนไขการใช้บริการ</Text>
                            </View>
                        </View>
                        <ScrollView style={{height: 325}}>
                            <Text style={{ fontFamily: 'Kanit-Medium', marginBottom: 10, fontSize: 16,}}>ข้อมูลต่างๆ บนเว็บไซต์ของมหาวิทยาลัย</Text>
                            <Text style={{ fontFamily: 'Kanit-Regular', fontSize: 15, marginBottom: 20}}>
                                มหาวิทยาลัยดูแลจัดการเว็บไซต์นี้ในประเทศไทย และมิได้ให้คำรับรองว่าข้อมูลที่จัดให้มีในหรือผ่านเว็บไซต์นี้ใช้ได้หรือเหมาะสมในการใช้ในประเทศอื่นๆ หากท่านใช้เว็บไซต์นี้ในประเทศอื่นๆ ท่านมีความรับผิดชอบในการปฏิบัติตามกฎหมายที่ใช้บังคับในประเทศนั้น
                                เนื้อหาในส่วนใดส่วนหนึ่งหรือหน้าใดหน้าหนึ่งของเว็บไซต์นี้ อาจระบุข้อตกลงและเงื่อนไขการใช้บริการอื่นที่แยกออกไปต่างหาก ในกรณีที่ข้อตกลงและเงื่อนไขการใช้บริการอื่นและข้อตกลงและเงื่อนไขการใช้บริการนี้ มีความขัดแย้งกัน ให้ใช้ข้อตกลงและเงื่อนไขในการใช้บริการที่แยกออกไปนั้น โดยมหาวิทยาลัยขอแนะนำให้ท่านอ่านข้อตกลงและเงื่อนไขการใช้บริการอื่นนั้นก่อนใช้บริการนั้นๆ
                                มหาวิทยาลัยขอสงวนสิทธิในการนำเสนอ ปรับปรุงและแก้ไขข้อมูลที่ปรากฏบนเว็บไซต์ ซึ่งข้อมูลดังกล่าวได้ถูกจัดทำขึ้นโดยมิได้มีจุดประสงค์เพื่อการให้คำแนะนำอย่างผู้เชี่ยวชาญ
                                ทั้งนี้ มหาวิทยาลัยไม่รับรองถึงความถูกต้อง และเป็นปัจจุบันของข้อมูลต่างๆ ในเว็บไซต์นี้
                            </Text>
                            <Text style={{ fontFamily: 'Kanit-Medium', marginBottom: 10, fontSize: 16,}}>การเชื่อมโยงเว็บไซต์ภายนอก</Text>
                            <Text style={{ fontFamily: 'Kanit-Regular', fontSize: 15, marginBottom: 20}}>
                                เว็บไซต์ของมหาวิทยาลัยอาจจัดให้มีการเชื่อมต่อไปยังเว็บไซต์อื่นๆ ซึ่งอยู่ภายใต้การดูแลของบุคคลที่สาม เพื่อวัตถุประสงค์ในการให้ข้อมูลและเพื่อความสะดวกของท่านเท่านั้น มหาวิทยาลัยไม่สามารถรับประกันว่าข้อมูลในเว็บไซต์อื่นๆ ดังกล่าวมีความถูกต้อง สมบูรณ์เพียงพอ เป็นปัจจุบัน เหมาะสมกับวัตถุประสงค์ใดโดยเฉพาะ และปราศจากไวรัส หรือ Malware ตลอดจนมหาวิทยาลัยไม่ต้องรับผิดต่อความสูญเสีย ความเสียหาย หรือค่าใช้จ่ายใดๆ ที่เกิดขึ้น อันเป็นผลสืบเนื่องมาจากการที่ท่านเข้าใช้เว็บไซต์อื่นๆ และมหาวิทยาลัยขอให้ลูกค้าทุกท่านศึกษารายละเอียดข้อกำหนดและเงื่อนไขในการใช้บริการของเว็บไซต์นั้นๆ ก่อนที่ท่านจะเข้าใช้บริการ
                            </Text>
                            <Text style={{ fontFamily: 'Kanit-Medium', marginBottom: 10, fontSize: 16,}}>การจำกัดความรับผิดชอบ</Text>
                            <Text style={{ fontFamily: 'Kanit-Regular', fontSize: 15, marginBottom: 20}}>
                                มหาวิทยาลัยไม่รับผิดชอบต่อความเสียหาย ค่าใช้จ่าย หรือความสูญเสีย ที่อาจเกิดขึ้นจากการใช้เว็บไซต์ของมหาวิทยาลัย หรือเว็บไซต์ที่เชื่อมโยงกับเว็บไซต์ธนาคาร ซึ่งรวมถึงจากความไม่ถูกต้องแม่นยำของข้อมูล ความล่าช้าในการถ่ายโอนข้อมูล ระยะเวลาในการเผยแพร่ข้อมูล เหตุขัดข้องหรืออุปสรรคของการเชื่อมต่อ ความผิดพลาดในการแสดงผล ความเสถียรของระบบ ไวรัสคอมพิวเตอร์
                            </Text>
                            <Text style={{ fontFamily: 'Kanit-Medium', marginBottom: 10, fontSize: 16,}}>กฎหมายที่ใช้บังคับ</Text>
                            <Text style={{ fontFamily: 'Kanit-Regular', fontSize: 15, marginBottom: 20}}>
                                การใช้บริการเว็บไซต์นี้หรือการตีความข้อตกลงและเงื่อนไขการใช้บริการเว็บไซต์นี้ให้เป็นไปตามกฎหมายไทย                            
                            </Text>
                        </ScrollView>
                        <View style={{flexDirection: 'row', flex: 1, width: '100%', marginTop: 20}}>
                            <TouchableOpacity
                                style={styles.buttonDefaultModal}
                                onPress={()=>{setModalVisible(!modalVisible);}}
                            >
                                <Text style={styles.textOrange}> ไม่ยอมรับ </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonModal}
                                onPress={()=>
                                    {props.navigation.navigate("Login"),
                                    setModalVisible(!modalVisible);}
                                }
                            >
                                <Text style={styles.text}> ยอมรับ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const deviceHeight = Dimensions.get("window").height * 0.75;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        fontFamily: 'Kanit-Bold',
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center',
    },
    containerAlpha: {
        padding: 30,
        fontFamily: 'Kanit-Bold',
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000AA',
    },
    text: {
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        color: '#fff',
    },
    textOrange: {
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        color: '#f77105',
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
    },
    modalView: {
        height: deviceHeight,
        backgroundColor: "#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 30,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
    heading: {
          color: '#f77105',
          fontFamily: 'Kanit-Bold',
          fontSize: 28,
    },
    heading2: {
        color: '#333',
        fontFamily: 'Kanit-Medium',
        fontSize: 22,
  },
    buttonModal: {
        width: '100%',
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#f77105',
        alignItems: 'center',
        fontFamily: 'Kanit-Bold',
        fontSize: 18,
        marginLeft: 10,
        height: 50,
        flex: 1,
    },
    buttonDefaultModal: {
        width: '100%',
        borderRadius: 6,
        padding: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        fontFamily: 'Kanit-Bold',
        borderWidth: 2,
        borderColor: '#f77105',
        fontSize: 18,
        marginRight: 10,
        height: 50,
        flex: 1,
    },
});