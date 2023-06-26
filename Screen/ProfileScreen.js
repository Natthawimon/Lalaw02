import * as React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, ButtonGroup, } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { BackgroundImage } from '@rneui/base';


export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../img/lll111.png')}
        style={{
          width: 422,
          height: 274,
          marginLeft: 0
        }}>


        {/* รูปและชื่อจากหลังบ้าน */}
        
        <Text></Text>
        <Text></Text>

       
        <Button color="#FFFF"
          title="ยอดคงเหลือ"
          onPress={() => navigation.navigate('Mainpage3')}
          titleStyle={{

            color: '#959595',
            fontSize: 20,

            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

          }} containerStyle={{
            width: 300,
            marginHorizontal: 10,
            marginVertical: 10,
            marginLeft: 55,
            borderRadius: 22,
            marginTop: 180,
            height: 100

          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 22,
            height: 100
          }}

          raised>

        </Button>
        <View style={styles.imageContainer}>
          <Image source={require('../img/Add.png')}
          style={{
            left:335,
            marginTop: 0,
          }}>
          </Image>
        
          </View>
      </ImageBackground>






      <View style={styles.container2}>


        <Text
          style={{
            fontSize: 14,
            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            color: '#000000',
            left: 25,
            padding: 6
          }}>ข้อมูลส่วนตัว
        </Text>


        <Button
        onPress={() => navigation.navigate('Profile2')}
          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 120,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/iconnewspaper.png')}>
          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>บัญชี</Text>
        </Button>


        <Button
          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 200,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/iconlockopen.png')}>
          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>ความเป็นส่วนตัว</Text>
        </Button>


        <Text
          style={{
            fontSize: 14,
            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            color: '#000000',
            left: 25,
            padding: 6
          }}>การทำรายการ
        </Text>
        <Button
          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 165,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/iconcredit.png')}>

          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>การเติมเงิน</Text>
        </Button>
        <Button
          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 230,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/iconrevert.png')}>

          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>ประวัติการทำรายการ</Text>
        </Button>

        <Text
          style={{
            fontSize: 14,
            fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
            left: 15,
            color: '#000000',
            left: 25,
            padding: 6
          }}>เกี่ยวกับแอป
        </Text>
        <Button
          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 190,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/iconwarningcircle.png')}>

          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>รายงานปัญหา</Text>
        </Button>
        <Button
          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 158,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/iconquestioncircle.png')}>

          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>ช่วยเหลือ</Text>
        </Button>
        <Button

          buttonStyle={{
            backgroundColor: "#FFFF",
            width: 215,
            height: 40
          }}
          containerStyle={{ backgroundColor: "#FFFF" }}>
          <Image source={require('../img/document.png')}>

          </Image>
          <Text
            style={{
              color: '#000000',
              fontSize: 17.5,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              left: 15
            }}>กฎหมาย/นโยบาย</Text>
        </Button>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container2: {
    width: 390,
    alignSelf: "center",
    marginTop: 60
  },
  imageContainer:{
    marginTop: -120
  }
})
