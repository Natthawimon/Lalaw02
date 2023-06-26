import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';


const About = () => {
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");

  return (
    <View style={{
      backgroundColor: "#FFF", flex: 1,
    }}>
      <Button
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#FF6966', '#FF6850'],
          start: { x: 0, y: 0.9 },
          end: { x: 1, y: 0.9 },

        }}
        containerStyle={{
          width: 412,
          height: 150
        }}
        buttonStyle={{
          height: 120,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,

        }}>
        <View style={{ flexDirection: "row",  marginTop: 55 }}>
          <Button color={'#FF6966'}
          containerStyle={{
            textAlign:"right",
            right:125
          }}>
            <Icon
              name='chevron-left'
              color={"#FFFF"}></Icon>
            <Text
              style={{
                color: "#FFFF",
                fontSize: 16,
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                


              }}>
              กลับ</Text></Button></View>
        <Text
          style={{
            color: "#FFFF",
            fontSize: 25,
            fontFamily: 'NotoSansThai-SemiBold',
            top: 25,
            textAlign: "center",
            right: 30
          }}>เกี่ยวกับ</Text>
      </Button>

      <View style={styles.container2}>
        <View style={styles.inputcontainer}>
        <Image source={require('../img/LALAWTALK.png')}
                style={{
                    width: 120,
                    height: 120,
                    alignSelf: "center",
                    justifyContent: "center",

                }} ></Image>
                <Text
                style={{
                    
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    textAlign:"center"
    
    
                  }}>เวอร์ชั่น 1.0.0 </Text>
                <Text
                style={{
                    
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    textAlign:"center"
    
    
                  }}>@2023 บริษัท นอนอ จำกัด</Text>



        </View>

      </View>

    </View>
  )
}



export default About

const styles = StyleSheet.create({
  inputcontainer: {
    width: 350,
    alignSelf: "center",
  },
  input: {

    height: 55,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderStartWidth: 1,
    borderEndWidth: 1,

    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
    fontSize: 20,
   margin:10
  }
})