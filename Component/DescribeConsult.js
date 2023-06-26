import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';




const DescribeConsult = () => {
    return (
        <View style={{ backgroundColor: "#FFF", flex: 1 }}>
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
                <View style={{ flexDirection: "row", right: 100, marginTop: 55 }}>
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
                        textAlign: "center"
                    }}>เลือกบริการ</Text>
            </Button>

            <View style={styles.container2}>
                <Button

                    onPress={() => console.log('Pressed')}
                    type="outline"

                    buttonStyle={{
                        height: 320,
                        padding: 0,
                        marginTop: 20,
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
                        marginTop: 20,
                        borderRadius: 20,

                    }} raised>

                    <Text style={{
                        color: 'black',
                        marginHorizontal: 5,
                        fontSize: 19,
                        fontFamily: 'NotoSansThai-SemiBold',
                        marginTop: 0
                    }}>อัตราค่าบริการ</Text>

                    <View style={{ flexDirection: "row", alignSelf: "center", right: 30, padding: 40 }}>
                        <Button
                            title="30 นาทีแรก"
                            type="outline"
                            titleStyle={{
                                color: '#959595',
                                fontSize: 16,
                                fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

                            }} containerStyle={{
                                width: 110,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 20,

                            }}
                            buttonStyle={{

                                borderColor: '#FBD653',
                                borderRadius: 10,
                                backgroundColor: "#FFFF",
                                borderWidth: 1,

                            }}

                            raised>

                        </Button><Text
                            style={{
                                color: '#959595',
                                fontSize: 16,
                                fontFamily: 'NotoSansThai-SemiBold',
                                marginTop: 20
                            }}>150 บาท</Text>


                    </View>
                    <Text style={{
                        color: 'black',
                        marginHorizontal: 5,
                        fontSize: 16,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        textAlign: "center"
                    }}>ยอดที่ต้องชำระ   150   บาท</Text>
                    <Button color="#FBD653"
                        title="ดำเนินการชำระเงิน"
                        onPress={() => navigation.navigate('HomeScreen')}
                        titleStyle={{
                            color: '#FFFF',
                            fontSize: 14,
                            fontFamily: 'NotoSansThai-SemiBold',

                        }} containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            marginLeft: 45,
                            borderRadius: 20,
                            marginTop: 40
                        }}
                        buttonStyle={{
                            borderWidth: 0,
                            borderColor: 'transparent',
                            borderRadius: 12,
                            width: 250

                        }}

                        raised>

                    </Button>
                </Button>

            </View>
        </View>
    )
}

export default DescribeConsult

const styles = StyleSheet.create({})