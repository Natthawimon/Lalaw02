import { StyleSheet, View, SafeAreaView, Image, Text, TextInput,Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import {

  Avatar,
  navigation
} from 'react-native-paper';
import { Button, ButtonGroup, } from '@rneui/themed';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";




function Login ({ navigation })  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  const handleLogin = () => {
   
      fetch('http://141.98.17.89/login', {
         method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
         body: JSON.stringify({ username, password }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.token) {
              // Login successful, log the token
              console.log('Token:', data.token);
              console.log('firstname:', data.sola);
              Alert.alert('Login Successful', 'You have been logged in successfully.');
              navigation.navigate('Services1')
            } else {
              // Login failed, display error message
              Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
            }
          })
          .catch(error => {
            console.error(error);
            Alert.alert('Error', 'An error occurred while logging in. Please try again later.');
          });
      };
    



  return (

    <View style={styles.container}>


      <View style={styles.imagecontainer}>

        <Image source={require('../img/LALAWTALK_112.png')}
          style={{
            width: 300,
            height: 190,
            marginTop: 58
          }} ></Image>
      </View>
      <Text
        style={{
          color: "black",
          textAlign: "right",
          maxWidth: 370,
          padding: 2,
          fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
        }}
        variant="labelSmall">ปรึกษากฎหมายและจ้างทนายความ</Text>


      <View style={styles.container2}>
        <View style={styles.container4}>

          {/* ใส่ปุ่มๆ */}

          <ButtonGroup
            buttons={['อีเมล', 'เบอร์โทรศัพท์']}
            selectedIndex={selectedIndex}
            underlayColor="#FBD653"
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            value=""
            containerStyle={{
              color: "#FBD653",
              borderRadius: 15,
              maxWidth: 330,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            }}
            buttonStyle={{
              backgroundColor: '#FCF0C5',
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            }}
            innerBorderStyle={{ color: "#FBD653" }}
            selectedButtonStyle={{ backgroundColor: "#FBD653" }}
            textStyle={{
              color: "black",
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              fontSize: 14
            }}
            selectedTextStyle={{ color: "black" }}
            titleStyle={{ fontFamily: 'NotoSansThai-VariableFont_wdth,wght', }}


          />




        </View>



        <View style={styles.container3}>
          <Text
            style={{
              color: "black",
              padding: 15,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

              fontSize: 13,
            }}>เข้าสู่ระบบด้วยอีเมล</Text>

          <View style={styles.inputcontainer}>
            <TextInput style={styles.input}
              disabledInputStyle={{ background: "#FBD653" }}
              underlineColor="#FBD653"
              outlineColor="#FBD653"
              activeOutlineColor="#FBD653"
              activeUnderlineColor="#FBD653"
              selectionColor="#FBD653"
              backgroundColor="white"
              placeholder="อีเมล"
              value={username}
              onChangeText={text => setUsername(text)}
              textColor="#959595"
              borderColor="#FBD653"

              multiline={true}




            />
            <TextInput style={styles.input}
              disabledInputStyle={{ background: "#FBD653" }}
              underlineColor="#FBD653"
              outlineColor="#FBD653"
              activeOutlineColor="#FBD653"
              activeUnderlineColor="#FBD653"
              selectionColor="#FBD653"
              backgroundColor="white"
              placeholder="รหัสผ่าน"
              value={password}
              onChangeText={text => setPassword(text)}
              textColor="#959595"
              borderColor="#FBD653"
              multiline={true}




            />
          </View>
          <Text
            style={{
              color: "red",
              textAlign: "right",
              padding: 10,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              fontSize: 11
            }}>ลืมรหัสผ่าน ?</Text>

          <View style={styles.buttoncontainer}>
            <Button color="#FBD653"
              title="เข้าสู่ระบบ" size="sm"
              onPress={handleLogin}
              titleStyle={{
                marginHorizontal: 10,
                color: 'black',
                fontSize: 14,
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                padding:10
              }}>
            </Button>

          </View>

          <Text variant="bodySmall"
            style={{
              color: "black",
              textAlign: "center",
              padding: 10,
              fontSize: 11,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            }}>คุณยังไม่มีบัญชี?
            <Text
            onPress={() => navigation.navigate('Register')}
              style={{
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              }}>ลงทะเบียน
              </Text></Text>

          <Text
            style={{
              color: "black",
              textAlign: "center",
              padding: 10,
              fontSize: 10,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

            }}>หรือ</Text>

          <View style={styles.top1}>
            <Button
              type="outline"
              buttonStyle={{
                backgroundColor: '#FFFF',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 20,
                borderColor: '#C5C5C5',
              }}
              containerStyle={{
                width: 65,
                marginHorizontal: 15,
                marginVertical: 0,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            ><Avatar.Image size={20}
              source={require('../img/R.png')}
              onPress={_handleSearch}

              /></Button>

            <Button
              type="outline"
              buttonStyle={{
                backgroundColor: '#FFFF',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 20,
                borderColor: '#C5C5C5',
              }}
              containerStyle={{
                width: 65,
                marginHorizontal: 15,
                marginVertical: 0,
              }}
              titleStyle={{ fontWeight: 'bold' }}>
              <Avatar.Image size={20}
                source={require('../img/imgbin-google-pay-send-computer-icons-google-logo-g-suite-new-entry-QbvHZFS4EX9dVGJ0vVqgmBLAV.jpg')}
                onPress={_handleSearch}
                style={{
                  color: "black",
                  textAlign: "center"
                }} /></Button>
            <Button
              type="outline"
              buttonStyle={{
                backgroundColor: '#FFFF',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 20,
                borderColor: '#C5C5C5',
              }}
              containerStyle={{
                width: 65,
                marginHorizontal: 15,
                marginVertical: 0,

              }}
              titleStyle={{ fontWeight: 'bold' }}>
              <Avatar.Image size={20}
                source={require('../img/apple-logo.png')}
                onPress={_handleMore}
                style={{
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "#FFFF"
                }} /></Button>
          </View>



          <Text source={require('..')}
            style={{
              color: "#959595",
              textAlign: "center",
              padding: 15,
              fontSize: 11,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            }}>ลงทะเบียน  ผู้ให้คำปรึกษาทางกฎหมาย</Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {

    width: '100%',
    maxWidth: 400,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: '#FFFF',
    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
    flex:1


  },
  imagecontainer: {
    alignSelf: "center",
    justifyContent: "center"



  },
  top1: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 2,
    flexDirection: 'row',
    marginBottom: 1,
    justifyContent: "space-between",
    padding: 5.5

  },

  container2: {

    width: '100%',
   height:500,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: '#FBD653',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: 20,
  



  },
  container3: {

    width: 380,
    maxWidth: 400,
    
    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

    height:400,
    alignSelf: "center",

    backgroundColor: '#FFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 20


  }, container4: {
    width: 350,
    maxWidth: 500,
    maxHeight: 200,

    alignSelf: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: 5,
    backgroundColor: "#FCF0C5",



  },
  buttoncontainer: {
    alignSelf: "center",
    justifyContent: "center",
    width: '80%',

  },
  top: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 2,

  },
  buttoncontainer2: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: "center",


  },
  subHeader: {
    backgroundColor: "#FCF0C5",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,

  },
  top11: {
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
    fontSize: 12


  },
  inputcontainer: {
    width: 300,
    alignSelf: "center",
  },


})