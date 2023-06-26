import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
    Avatar,
    IconButton,   
    
} from 'react-native-paper';
import { Button, ButtonGroup, } from '@rneui/themed';
import { Icon } from "@rneui/base";

const Register = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');
    const [visible, setVisible] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

    return (
        <View style={styles.container}>
             <Image source={require('../img/Ellipse1.png')}
                style={{
                    position: "absolute",
                    marginRight:40,
                    width: 250,
                    height: 700,

                }} ></Image>
          
            <View style={styles.imagecontainer}> 
            <Image source={require('../img/LALAWTALK_18.png')}
                style={{
                    width: 140,
                    height: 140,
                    marginTop: 45

                }} ></Image></View>
            <View style={styles.container3}>
           
            

                <Text
                    style={{
                        color: "#959595",
                        padding: 10,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        textAlign: 'center',
                        fontSize: 30,
                    }}>ลงทะเบียนตอนนี้</Text>
                    
                <Text
                
                    style={{
                        color: "#959595",
                        padding: 5,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        textAlign: 'center',
                        fontSize: 15,
                        
                    }}>เพื่อปรึกษาปัญหาของคุณ</Text>
                <View style={styles.inputcontainer}>
    
                <View style={styles.row4}>
                    <Image source={require('../img/iconuser_.png')}
                style={{
                    margin:10
                }} ></Image>
                    <TextInput style={styles.input}
                        disabledInputStyle={{ background: "#FBD653" }}
                        underlineColor="#FBD653"
                        outlineColor="#FBD653"
                        activeOutlineColor="#FBD653"
                        activeUnderlineColor="#FBD653"
                        selectionColor="#FBD653"
                        backgroundColor="white"
                        placeholder="ชื่อจริง"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        textColor="#959595"
                        borderColor="#FBD653"
                        keyboardType="numeric"
                        multiline={true}




                    /></View>
                    <View style={styles.row4}>
                    <Image source={require('../img/iconuser_.png')}
                style={{
                    margin:10
                }} ></Image>
                    <TextInput style={styles.input}
                        disabledInputStyle={{ background: "#FBD653" }}
                        underlineColor="#FBD653"
                        outlineColor="#FBD653"
                        activeOutlineColor="#FBD653"
                        activeUnderlineColor="#FBD653"
                        selectionColor="#FBD653"
                        backgroundColor="white"
                        placeholder="นามสกุล"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        textColor="#959595"
                        borderColor="#FBD653"
                        keyboardType="numeric"
                        multiline={true}



                    /></View>
                    <View style={styles.row4}>
                    <Image source={require('../img/Vector.png')}
                style={{
                    margin:10
                    
                }} ></Image>
                    <TextInput style={styles.input}
                        disabledInputStyle={{ background: "#FBD653" }}
                        underlineColor="#FBD653"
                        outlineColor="#FBD653"
                        activeOutlineColor="#FBD653"
                        activeUnderlineColor="#FBD653"
                        selectionColor="#FBD653"
                        backgroundColor="white"
                        placeholder="เบอร์โทรศัพท์"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        textColor="#959595"
                        borderColor="#FBD653"
                        keyboardType="numeric"
                        multiline={true}



                    /></View>
                    <View style={styles.row4}>
                    <Image source={require('../img/calendar1_.png')}
                style={{
                    margin:10
                    

                }} ></Image>
                    <TextInput style={styles.input}
                        disabledInputStyle={{ background: "#FBD653" }}
                        underlineColor="#FBD653"
                        outlineColor="#FBD653"
                        activeOutlineColor="#FBD653"
                        activeUnderlineColor="#FBD653"
                        selectionColor="#FBD653"
                        backgroundColor="white"
                        placeholder="วัน/เดือน/ปีเกิด"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        textColor="#959595"
                        borderColor="#FBD653"
                        keyboardType="numeric"
                        multiline={true}



                    /></View>
                    <View style={styles.row4}>
                    <Image source={require('../img/Group1.png')}
                style={{
                    margin:10

                }} ></Image>
                    <TextInput style={styles.input}
                        disabledInputStyle={{ background: "#FBD653" }}
                        underlineColor="#FBD653"
                        outlineColor="#FBD653"
                        activeOutlineColor="#FBD653"
                        activeUnderlineColor="#FBD653"
                        selectionColor="#FBD653"
                        backgroundColor="white"
                        placeholder="รหัสผ่าน"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        textColor="#959595"
                        borderColor="#FBD653"
                        keyboardType="numeric"
                        multiline={true}



                    /></View>
                    <View style={styles.row4}>
                    <Image source={require('../img/Group1.png')}
                style={{
                    margin:10

                }} ></Image>
                    <TextInput style={styles.input}
                        disabledInputStyle={{ background: "#FBD653" }}
                        underlineColor="#FBD653"
                        outlineColor="#FBD653"
                        activeOutlineColor="#FBD653"
                        activeUnderlineColor="#FBD653"
                        selectionColor="#FBD653"
                        backgroundColor="white"
                        placeholder="ยืนยันรหัสผ่าน"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        textColor="#959595"
                        borderColor="#FBD653"
                        keyboardType="numeric"
                        multiline={true}>   
                        
                    
                    </TextInput></View>
                    <Text
                    style={{
                        color: "#959595",
                        padding: 5,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        textAlign: 'center',
                        fontSize: 11,
                        padding:15
                    }}>หมายเหตุ : กรุณาตรวจสอบข้อมูลก่อนยืนยัน</Text>
                    
                    
                    <View style={styles.buttoncontainer}>
            <Button color="#FBD653"
              title="ยืนยัน" size="sm"
              onPress={() => console.log('Pressed')}
              titleStyle={{
                marginHorizontal: 10,
                color: 'black',
                fontSize: 14,
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              }}>
            </Button>

          </View>
                 

                    



                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
        backgroundColor:"#FBD653",
        

    },
    container3: {
        width: '100%',
        height: '75%',
        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
        alignSelf: "center",
        backgroundColor: '#FFFF',
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        margin: 20
    },
    input: {
        borderColor: "black"
    },
    input: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 35,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderStartWidth: 1,
        borderEndWidth: 1,
        margin: 6,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
        fontSize: 12,
        flex:1


    },
    inputcontainer: {
        width: 300,
        alignSelf: "center",
        margin:10
    },
    imagecontainer: {
        alignSelf: "center",
        justifyContent: "center"
    
    
    
      },
      row4:{
        flexDirection: 'row',
        
      }
})