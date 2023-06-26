import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Mainpage1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      
        <View style={styles.imagecontainer}>
        <Image source={require('../img/LALAWTALK_19.png')}
        style={{
            width: 395,
            height: 155,
            marginLeft:24,
           

        }}></Image>
        <Text
                    style={{
                        color: "black",
                        padding: 0,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        textAlign: 'center',
                        fontSize: 15,
                        
                    }}>ปรึกษากฎหมายและจ้างทนายความ</Text>

                    <View style={styles.imagecontainer2}>
      <Image source={require('../img/justice.png')}
                style={{
                    width: 360,
                    height: 360,
                    marginRight:40,
                    padding:15,
                    margin:16

                }} ></Image>
                </View>
                </View>
    </View>
  )
}

export default Mainpage1

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: '#FBD653',
        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

    },
    imagecontainer: {
        alignSelf: "center",
        justifyContent: "center"
    
    
    
      },
      imagecontainer2:{
        padding:20,
        marginTop:45,
       
    
      }
})