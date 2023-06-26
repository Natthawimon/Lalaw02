import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, ButtonGroup, } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';


// Screens





const Addmoneyfinish = () => {

    return (
        <View style={styles.container}>


            
            <View style={{marginTop:50}} >
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'NotoSansThai-SemiBold',
                    color: "black",
                    left: 150,
                    top: 70
                    

                }}>ทำรายการสำเร็จ</Text>
            <View style={styles.container2}>
                <Button
                    
                    onPress={() => console.log('Pressed')}
                    type="outline"

                    buttonStyle={{
                        height: 320,
                        padding: 0,
                        marginTop: 30,
                        width: 330,
                        borderRadius: 20,
                        backgroundColor: "#FFFF",
                        borderColor: "#FFFF",
                        borderWidth: 1,
                        flexDirection: 'column'
                    }}
                    containerStyle={{
                        width: 330,
                        marginHorizontal: 45,
                        marginVertical: 0,
                        padding: 0,
                        height: 350,
                        marginTop: 30,
                        borderRadius: 20,

                    }} raised>
                        <Image source={require('../img/Accept.png')}
                        style={{
                            width:150,
                            height:150
                        }}></Image>
                    <Text style={{
                        color: 'black',
                        marginHorizontal: 5,
                        fontSize: 15,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        marginTop:25
                    }}>ยืนยันการทำรายการ ระบบกำลังเติมเงิน</Text>
                   
                </Button>
                <View style={styles.buttonContainer}>
                <Button color="#FBD653"
              title="ตกลง" 
              onPress={() => console.log('Pressed')}
              titleStyle={{
                
                color: '#FFFF',
                fontSize: 15,
                
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                
              }}containerStyle={{
                width: 110,
                marginHorizontal: 50,
                marginVertical: 10,
                marginLeft:140,
                borderRadius: 20,
                marginTop:20
                
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 12,
                
             }}
                
              raised>
                
            </Button>
            </View>
                
            </View>
            </View>

           
           

        </View>
        
    )
}

export default Addmoneyfinish

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#FFFF",
        
        

    },
    container2:{
       marginTop:80
    },
    buttonContainer:{
        padding:20
    }
})