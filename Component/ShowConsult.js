import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { Button, ButtonGroup, } from '@rneui/themed';


const ShowConsult = () => {
    const CustomTitle = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../img/Group69.png')}
                    style={{
                        width: 25,
                        height: 20,
                        marginHorizontal: 10,
                    }}>

                </Image>
                <Text style={{ fontSize: 16, fontFamily: 'NotoSansThai-SemiBold', color: "#FBD653" }}>ค้นหาใหม่</Text>

            </View>
        );
    };
    return (

        <View style={{ backgroundColor: "#FFFF", flex: 1 }}>
            <Appbar.Header >
                <Appbar.Action
                    icon="chevron-left"
                    size={25}
                    color={"#FF6969"}
                    onPress={() => { }}>

                </Appbar.Action>

                <Appbar.Content onPress={() => { }}
                    color='#FF6969' title="หน้าแรก"
                    titleStyle={{
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        fontSize: 15
                    }}
                />
            </Appbar.Header>

            <Image
                style={{
                    width: 350,
                    height: 370
                }}></Image>
            <Text
                style={{
                    fontSize: 18,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    textAlign: "center"

                }}>คุณหนูแมมมอส แฟนนอนอ</Text>
            <Text
                style={{
                    fontSize: 18,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    textAlign: "center"

                }}>วุฒิการศึกษา ปริญญาตรี นิติศาสตร์บัณฑิต</Text>
            <Button color="#FBD653"
                title="ยืนยันรับคำปรึกษา"
                onPress={() => navigation.navigate('HomeScreen')}
                titleStyle={{
                    color: '#FFFF',
                    fontSize: 16,
                    fontFamily: 'NotoSansThai-SemiBold',

                }} containerStyle={{
                    width: 300,
                    marginHorizontal: 50,
                    marginVertical: 10,
                    marginLeft: 45,
                    borderRadius: 10,
                    marginTop: 80
                }}
                buttonStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 8,
                    width: 300,
                    height: 50


                }}

            >

            </Button>
            <Button color="#FFFF"

                title={<CustomTitle />}
                type='outline'
                titleStyle={{
                    color: '#FBD653',
                    fontSize: 14,
                    fontFamily: 'NotoSansThai-SemiBold',

                }} containerStyle={{
                    width: 300,
                    marginHorizontal: 50,
                    marginVertical: 10,
                    marginLeft: 45,
                    borderRadius: 10,
                    marginTop: 0
                }}
                buttonStyle={{
                    borderWidth: 0,
                    borderRadius: 8,
                    width: 300,
                    borderColor: '#FBD653',
                    borderRadius: 10,
                    backgroundColor: "#FFFF",
                    borderWidth: 1,
                    height: 50

                }}

            >

            </Button>
        </View>
    )
}

export default ShowConsult

const styles = StyleSheet.create({})