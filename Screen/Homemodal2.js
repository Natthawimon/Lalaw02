import {
  View, Text, StyleSheet, Image, ImageBackground, ViewProps, props, ActivityIndicator,
  TouchableHighlight, Modal
} from 'react-native';
import { Button, ButtonGroup } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Checkbox } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import Slideshow from 'react-native-image-slider-show';
import AwesomeButton from 'react-native-really-awesome-button';
import React, { useEffect, useState } from "react";




export default function Homemodal2({ navigation }) {
  const [checked, setChecked] = React.useState(false);




  const CustomTitle = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Image source={require('../img/Conversation.png')}
          style={{
            width: 90,
            height: 90,
            marginHorizontal: 10,
          }}>

        </Image>
        <Text style={{ fontSize: 18, fontFamily: 'NotoSansThai-SemiBold', color: "#FFFF" }}>ปรึกษากฎหมาย</Text>

      </View>
    );
  };
  const CustomTitle1 = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Image source={require('../img/agreement.png')}
          style={{
            width: 90,
            height: 90,
            marginHorizontal: 10,
          }}></Image>
        <Text style={{ fontSize: 18, fontFamily: 'NotoSansThai-SemiBold', color: "#FFFF" }}>จ้างทนายความ</Text>

      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={{
        color: "#000000",
        marginHorizontal: 5,
        fontSize: 25,
        top: 75,
        left: 25,
        fontFamily: 'NotoSansThai-SemiBold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
      }}>สวีสดี ผู้ใช้งาน </Text>
      <Text style={{
        color: "#000000",
        marginHorizontal: 5,
        top: 75,
        fontSize: 20,
        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
        left: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
      }}>ค้นหาที่ปรึกษาของคุณได้เลย !</Text>
      <View style={styles.text1}>
        <Image source={require('../img/Line6.png')}
          style={{
            top: 15,
          }}></Image>
        <Text
          style={{
            color: "#000000",
            marginHorizontal: 5,
            fontSize: 22,

            fontFamily: 'NotoSansThai-SemiBold',
          }}>บริการของคุณ</Text>
        <Image source={require('../img/Line6.png')}
          style={{
            top: 15,
          }}></Image>
      </View>


      <View style={styles.buttonContainer}>
        <Button color="pink"
          title={<CustomTitle />}
          raised
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['#FF6966', '#FF6850'],

          }}
          onPress={() => navigation.navigate('Choicepage')}
          titleStyle={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'NotoSansThai-SemiBold',
            marginHorizontal: 10,

          }} containerStyle={{
            width: 165,
            marginHorizontal: 10,
            marginVertical: 10,

            borderRadius: 20,
            marginTop: 15,
            height: 150

          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 12,
            height: 150,
            flexDirection: 'column',

          }}

        >

        </Button>
        <View style={styles.button1}>
          <Button
            title={<CustomTitle1 />}
            raised
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#FF6966', '#FF6850'],

            }}

            onPress={() => navigation.navigate('Choicepage')}
            titleStyle={{
              color: 'black',
              fontSize: 84,
              fontFamily: 'NotoSansThai-SemiBold',

            }} containerStyle={{
              width: 165,
              marginHorizontal: 10,
              marginVertical: 10,

              borderRadius: 20,
              marginTop: 15,
              height: 100

            }}
            buttonStyle={{
              borderWidth: 0,
              borderColor: 'transparent',
              borderRadius: 12,
              height: 150

            }}

          >

          </Button>
        </View>
      </View>


      <Modal
        transparent={true}
        visible={true}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{
            backgroundColor: "#FFFF",
            margin: 50,
            height: 340,
            alignSelf: "center",
            marginTop: 210,
            width: 350,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
            <Button
              title={<CustomTitle1 />}
              raised
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#FF6966', '#FF6850'],

              }}
              onPress={() => navigation.navigate('Choicepage')}
              titleStyle={{
                color: 'black',
                fontSize: 14,
                fontFamily: 'NotoSansThai-SemiBold',
                marginHorizontal: 10,

              }} containerStyle={{
                width: 155,
                marginHorizontal: 10,
                marginVertical: 10,

                borderRadius: 20,
                marginTop: 45,
                height: 140,
                left: 85

              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 12,
                height: 140,
                flexDirection: 'column',


              }}

            ></Button>
            <Text style={{
              color: "#000000",
              fontSize: 13,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              marginTop: 10,
              left: 60
            }}>หากท่านต้องการทราบกระบวนการดำเนินคดี</Text>
            <Text style={{
              color: "#000000",
              fontSize: 13,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              marginTop: 0,
              left: 70
            }}>บนชั้นศาลอย่างละเอียดท่านควรจะปรึกษา</Text>
            <Text style={{
              color: "#000000",
              fontSize: 13,
              fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              marginTop: 0,
              left: 80
            }}>กฎหมายกับทนายความผู้มีใบอนุญาต</Text>
            <View style={{ flexDirection: 'row',left:105,marginTop:5 }}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color='#FF6969'
                uncheckedColor="#FF6969"
                onPress={() => {
                  setChecked(!checked);
                }}
              /><Text
              style={{
                marginTop:7,
                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
              }}>ไม่แสดงสิ่งนี้อีก</Text></View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../img/Ellipse4.png')}
                style={{
                  marginTop: 20,
                  left: 155
                }}></Image>
              <Image source={require('../img/Ellipse3.png')}
                style={{
                  marginTop: 20,
                  left: 165
                }}></Image>
            </View>










          </View>
          <Button color="#FBD653"
            title="เริ่ม"
            onPress={() => navigation.navigate('Services1')}
            titleStyle={{

              color: '#FFFF',
              fontSize: 14,

              fontFamily: 'NotoSansThai-SemiBold',

            }} containerStyle={{
              width: 110,
              marginHorizontal: 50,
              marginVertical: 10,
              marginLeft: 145,
              borderRadius: 20,
              marginTop: -30
            }}
            buttonStyle={{
              borderWidth: 0,
              borderColor: 'transparent',
              borderRadius: 12,
            }}

            raised>

          </Button>

        </View>
      </Modal>

      <View style={styles.container2}>


        <Card>
          <Card.Cover source={require('../img/new.png')}
            style={{
              width: 356,
              height: 130,

            }} />
        </Card>
        <View style={styles.container3}>
          <Text style={{
            color: "#000000",
            marginHorizontal: 5,
            left: 15,
            fontSize: 17,
            fontFamily: 'NotoSansThai-SemiBold',
          }}>กฎหมายน่ารู้</Text>
          <Slideshow dataSource={[
            { url: 'https://th.bing.com/th/id/OIP.Jv5r2JWqrAOBrmeQwI2AogAAAA?pid=ImgDet&rs=1' },
            { url: 'https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-majestic-lecturer-orange-table-lamp-brown-podium-essentials-for-postgraduate-study-png-image_411090.jpg' },
            { url: 'https://www.pscgroup1988.co.th/2018/wp-content/uploads/2020/12/286668-P6PMK3-368-800x400.jpg' }
          ]} />
        </View>
      </View>
    </View>
  )



}
const styles = StyleSheet.create({
  container2: {
    width: 350,
    alignSelf: "center",
    flex: 1,
    position: 'absolute',
    marginTop: 390,
    margin: 3






  },
  container: {
    flex: 1,
    backgroundColor: "#FFFF",

  },

  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignSelf: "center",
    margin: 2
  },
  text1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 105,
    alignSelf: "center",



  },
  container3: {
    width: 360,
    alignSelf: "center",
    flex: 1,
    position: 'absolute',
    marginTop: 150,
    margin: 3
  },
  button1: {
    flexDirection: 'column',
  }

})
