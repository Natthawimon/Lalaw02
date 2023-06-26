import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';



const Loadwaiting = () => {
  return (
    <View style={styles.container}>
      <Text style={{
            color: "#FFFF",
            marginHorizontal: 5,
            left:135,
            fontSize: 25,
            
            fontFamily: 'NotoSansThai-SemiBold',
          }}>เรากำลังหา</Text>
           <Text style={{
            color: "#FFFF",
            marginHorizontal: 5,
            left:85,
            fontSize: 20,
            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
          }}>ที่ปรึกษาที่ดีที่สุดให้กับคุณ</Text>
          <Image source={require('../img/education.png')}
                style={{
                    width: 300,
                    height: 300,
                    
                    padding:2,
                    margin:50

                }} ></Image>
                <ActivityIndicator animating={true} color="#FFFF" />
    </View>
  )
}

export default Loadwaiting

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FBD653',
        flex:1,
        alignSelf: "center",
        justifyContent: "center",
        width:"100%"
    }
})