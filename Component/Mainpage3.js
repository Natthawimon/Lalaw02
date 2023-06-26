import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Button, ButtonGroup, } from '@rneui/themed';
import {
  Avatar,
  IconButton,   
  navigation
} from 'react-native-paper';

function Mainpage3 ({navigation}) {
  return (
    <View style={styles.contrainer}>
        <View style={styles.contrainer2}>
        <View style={styles.contrainer3}>
      <Text  style={{
                        color: "black",
                        padding: 0,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        textAlign: 'center',
                        fontSize: 15,
                        
                    }}>ปรึกษาปัญหากฎหมายของคุณได้เลย !
      </Text>
      
                    </View>
                    <Image source={require('../img/quote1.png')}
                style={{
                    width: 250,
                    height: 250,
                    
                    padding:2,
                    margin:50

                }} ></Image>
                <Button color="#FBD653"
              title="เริ่มเลย" 
              onPress={() => navigation.navigate('Services1',{screen:'HomeScreen'})}
              titleStyle={{
                color: 'black',
                fontSize: 14,
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                
              }}containerStyle={{
                width: 110,
                marginHorizontal: 50,
                marginVertical: 10,
                marginLeft:125,
                borderRadius: 20,
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 12, }}
              
              raised>
            </Button>
            </View>
    </View>
  )
}

export default Mainpage3

const styles = StyleSheet.create({
    contrainer:{
        width: '100%',
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor:"#FFFF",
        height: '100%',
        

    },
    contrainer2:{
        alignSelf: "center",
        justifyContent: "center",
        flex:1
    },
    contrainer3:{
        padding:10
    }
})