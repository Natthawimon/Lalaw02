import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Checkbox } from 'react-native-paper';

const Choicemodal2 = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>

            <Text
                style={{
                    fontSize: 35,
                    fontFamily: 'NotoSansThai-SemiBold',
                    color: "#FBD653",
                    left: 100,

                }}>ปรึกษากฎหมาย</Text>
            <View style={styles.container2}>
                <Button
                    title="ปรึกษาปัญหากฎหมาย"
                    onPress={() => console.log('Pressed')}
                    type="outline"
                    buttonStyle={{
                        height: 110,
                        padding: 0,

                        width: 330,
                        borderRadius: 20,
                        backgroundColor: "#FFFF",
                        borderColor: "#FBD653",
                        borderWidth: 1,
                    }}
                    containerStyle={{
                        width: 330,
                        marginHorizontal: 40,
                        marginVertical: 0,
                        padding: 0,
                        borderRadius: 20,
                        height: 110,
                        marginTop: 30,

                    }}
                    raised><Image source={require('../img/contract11.png')}
                        style={{
                            width: 50,
                            height: 50

                        }}></Image>
                    <Text style={{
                        color: '#FBD653',
                        marginHorizontal: 30,
                        fontSize: 25,
                        fontFamily: 'NotoSansThai-SemiBold',
                    }}>กับทนายความ</Text>
                </Button>
                <Button
                    title="" size="lg"
                    onPress={() => console.log('Pressed')}
                    type="outline"

                    buttonStyle={{
                        height: 110,
                        padding: 0,

                        width: 330,
                        borderRadius: 20,
                        backgroundColor: "#FFFF",
                        borderColor: "#FBD653",
                        borderWidth: 1,
                    }}
                    containerStyle={{
                        width: 330,
                        marginHorizontal: 40,
                        marginVertical: 0,
                        padding: 0,
                        borderRadius: 20,
                        height: 110,
                        marginTop: 30,

                    }}
                    raised>
                    <Image source={require('../img/contract11.png')}
                        style={{
                            width: 50,
                            height: 50

                        }}></Image>
                    <Text style={{
                        color: '#FBD653',
                        marginHorizontal: 30,
                        fontSize: 25,
                        fontFamily: 'NotoSansThai-SemiBold',
                    }}>กับทนายความ</Text>
                </Button>
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

                                onPress={() => console.log('Pressed')}
                                type="outline"
                                buttonStyle={{
                                    height: 110,
                                    padding: 0,

                                    width: 280,
                                    borderRadius: 20,
                                    backgroundColor: "#FFFF",
                                    borderColor: "#FBD653",
                                    borderWidth: 1,
                                }}
                                containerStyle={{
                                    width: 280,
                                    marginHorizontal: 40,
                                    marginVertical: 0,
                                    padding: 0,
                                    borderRadius: 20,
                                    height: 110,
                                    marginTop: 30,

                                }}
                                raised><Image source={require('../img/contract11.png')}
                                    style={{
                                        width: 50,
                                        height: 50

                                    }}></Image>
                                <Text style={{
                                    color: '#FBD653',
                                    marginHorizontal: 30,
                                    fontSize: 25,
                                    fontFamily: 'NotoSansThai-SemiBold',
                                }}>กับทนายความ</Text></Button>
                            <Text style={{
                                color: "#000000",
                                fontSize: 18,
                                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                                marginTop: 40,
                                left: 50
                            }}>คุณสามารถรู้กระบวนการทั้งหมดทาง</Text>
                            <Text style={{
                                color: "#000000",
                                fontSize: 18,
                                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                                marginTop: 0,
                                left: 55
                            }}>กฎหมายได้ผ่านทนายที่มีใบอนุญาต</Text>
                             <View style={{ flexDirection: 'row',left:105,marginTop:25 }}>
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
                                marginTop:30,
                                left:150
                             }}></Image>
                             <Image source={require('../img/Ellipse3.png')}
                             style={{
                                marginTop:30,
                                left:160
                             }}></Image>
                             </View>
                        </View>
                        <Button color="#FBD653"
                            title="ต่อไป"
                            onPress={() => navigation.navigate('HomeScreen')}
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
                                marginTop: -40
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

            </View>



        </View>
    )
}

export default Choicemodal2


const styles = StyleSheet.create({

    container: {

        backgroundColor: "#FFFF",
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        flex: 1,
        marginTop: -150,
        padding: 0

    }

})
