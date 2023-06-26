import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';


const EmailSetting = () => {
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
        <View style={{ flexDirection: "row", right: 145, marginTop: 55 }}>
          <Button color={'#FF6966'}>
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
          }}>อีเมล</Text>
      </Button>

      <View style={styles.container2}>
        <View style={styles.inputcontainer}>
        <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        color: '#959595',
                        left: 0,
                        padding: 6
                    }}>อีเมลที่ใช้ในขณะนี้
                </Text>

          <TextInput style={styles.input}
            disabledInputStyle={{ background: "#FFF" }}
            underlineColor="#FFF"
            outlineColor="#FFF"
            activeOutlineColor="#FFF"
            activeUnderlineColor="#FFF"
            selectionColor="black"
            backgroundColor="white"
            placeholder="อีเมลเอามาจากหลังบ้าน"
            value={text}
            onChangeText={text => setText(text)}
            textColor="#959595"
            borderColor="#959595"

            multiline={false}





          />
          <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        color: '#959595',
                        left: 0,
                        padding: 6
                    }}>อีเมลใหม่
                </Text>
          <TextInput style={styles.input}
            disabledInputStyle={{ background: "#FFF" }}
            underlineColor="#FFF"
            outlineColor="#FFF"
            activeOutlineColor="#FFF"
            activeUnderlineColor="#FFF"
            selectionColor="black"
            backgroundColor="white"
            placeholder="อีเมล"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            textColor="#959595"
            borderColor="#959595"

            multiline={false}





          />



        </View>

      </View>
      <Button color="#FBD653"

        title={"บันทึก"}
        type='outline'
        titleStyle={{
          color: '#FFFF',
          fontSize: 14,
          fontFamily: 'NotoSansThai-SemiBold',

        }} containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
          marginLeft: 45,
          borderRadius: 10,
          
          marginTop:350
        }}
        buttonStyle={{
          borderWidth: 0,
          borderRadius: 8,
          width: 300,
          borderColor: '#FBD653',
          borderRadius: 10,
          backgroundColor: "#FBD653",
          borderWidth: 1,
          

        }}

      >

      </Button>
    </View>
  )
}



export default EmailSetting

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