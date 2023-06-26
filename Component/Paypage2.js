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





const Paypage2 = () => {

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
                    left: 130,
                    top: 70
                    

                }}>ดำเนินการชำระเงิน</Text>
            <View style={styles.container2}>
                <Button
                    
                    onPress={() => console.log('Pressed')}
                    type="outline"

                    buttonStyle={{
                        height: 90,
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
                        height: 140,
                        marginTop: 30,
                        borderRadius: 20,

                    }} raised>
                    <Text style={{
                        color: 'black',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    }}>ยอดเงินคงเหลือกระเป๋าตังค์</Text>
                    <Text
                    style={{
                        color: 'black',
                        marginHorizontal: 5,
                        fontSize: 20,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    }}>1000 บาท</Text>
                </Button>
                <Text
                style={{
                    fontSize: 15,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    color: "black",
                    left: 130,
                    top: 70,
                    
                    

                }}>ยอดที่ต้องชำระ
                <Text 
                 style={{
                    fontSize: 15,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    color: "black",
                    margin:20
                    
                    

                }}>550</Text>
                บาท
                </Text>
                
                

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
                marginTop:150
                
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

export default Paypage2

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