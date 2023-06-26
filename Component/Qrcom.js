import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, } from '@rneui/themed';

const Qrcom = () => {
    return (
        <View style={styles.a1}>
            <View>
                <Text style={{
                    color:"#000",
                    left:130,
                    marginTop:100,
                    fontSize:18
                    
                }} > 
                    ดำเนินการชำระเงิน
                    </Text>
            </View>
            <View>
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

              }} raised
              ><Image source={require('../img/Qrcode.png')}></Image>
            
            </Button>
            </View>
            <Text
            style={{
                marginTop:50,
                color:"#000",
                fontSize:18,
                left:100

            }}>
                ยอดที่ต้องชำระ 
            </Text>
        
        </View>
    )
}

export default Qrcom

const styles = StyleSheet.create({
    a1:{
        flex:1,
        backgroundColor:"#FFFF"

    }
   
})
