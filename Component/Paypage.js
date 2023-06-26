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





const Paypage = () => {

    return (
        <View style={styles.container}>


            <Appbar.Header >
                <Appbar.Action
                icon="chevron-left"
                size={25}
                color={"#FF6969"}
                onPress={() => {}}>
                    
                </Appbar.Action>

                <Appbar.Content onPress={() => {}}
                    color='#FF6969' title="กลับ"
                    titleStyle={{
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        fontSize: 15
                    }}
                />
            </Appbar.Header>
            <View >
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'NotoSansThai-SemiBold',
                    color: "black",
                    left: 80,
                    top: 70
                    

                }}>กรุณาเลือกช่องทางการชำระเงิน</Text>
            <View style={styles.container2}>
                <Button
                    
                    onPress={() => console.log('Pressed')}
                    type="outline"

                    buttonStyle={{
                        height: 110,
                        padding: 0,
                        marginTop: 30,
                        width: 330,
                        borderRadius: 20,
                        backgroundColor: "#FFFF",
                        borderColor: "#FBD653",
                        borderWidth: 1,
                    }}
                    containerStyle={{
                        width: 350,
                        marginHorizontal: 45,
                        marginVertical: 0,
                        padding: 0

                    }}>
                    <Text style={{
                        color: '#959595',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    }}>ชำระเงินผ่านกระเป๋าตังค์</Text>
                    <Image source={require('../img/Ewallet.png')}
                        style={{
                            width: 40,
                            height: 40

                        }}></Image>
                </Button>
                <Button
                    title="" 
                    onPress={() => console.log('Pressed')}
                    type="outline"

                    buttonStyle={{
                        height: 110,
                        padding: 0,
                        marginTop: 30,
                        width: 330,
                        borderRadius: 20,
                        backgroundColor: "#FFFF",
                        borderColor: "#FBD653",
                        borderWidth: 1,
                    }}
                    containerStyle={{
                        width: 330,
                        marginHorizontal: 45,
                        marginVertical: 0,

                    }}>
                    <Text style={{
                        color: '#959595',
                        marginHorizontal: 30,
                        fontSize: 20,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    }}>ชำระผ่าน QR code</Text>
                    <Image source={require('../img/Qrcode.png')}
                        style={{
                            width: 40,
                            height: 40

                        }}></Image>
                </Button>
                <View style={styles.buttonContainer}>
                <Button color="#FBD653"
              title="ชำระเงิน" 
              onPress={() => navigation.navigate('Mainpage3')}
              titleStyle={{
                
                color: '#FFFF',
                fontSize: 14,
                
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                
              }}containerStyle={{
                width: 110,
                marginHorizontal: 50,
                marginVertical: 10,
                marginLeft:140,
                borderRadius: 20,
                marginTop:50
                
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

export default Paypage

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