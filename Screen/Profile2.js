import * as React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { BackgroundImage } from '@rneui/base';
import HomeScreen from '../Screen/HomeScreen';
import ChatScreen from '../Screen/ChatScreen';
import AdmireScreen from '../Screen/AdmireScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();


export default function Profile2({ navigation }) {
    const homeName = "Home";
    const chatName = "chat";
    const admireName = "admire";
    const profileName = "profile";
    return (

        <View style={{ flex: 1, backgroundColor: "#FFFF" }}>
            <ImageBackground source={require('../img/lll111.png')}
                style={{
                    width: 422,
                    height: 274,
                    marginLeft: 0
                }}>


                {/* รูปและชื่อจากหลังบ้าน */}
                <Button
                    color={"#FBD653"}
                    containerStyle={{
                        alignSelf: "center",
                        width: 200,
                        height: 400,
                        marginTop: 60
                    }}
                    buttonStyle={{
                        height: 150,
                        borderRadius: 120,
                    }}>



                </Button>



            </ImageBackground>

            <Text
                style={{
                    fontSize: 18,
                    fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                    textAlign: "center",
                    marginTop: 25

                }}>โปรไฟล์ของคุณ</Text>




            <View style={styles.container2}>


                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        color: '#959595',


                    }}>ชื่อ
                </Text>

                <Button

                    onPress={() => navigation.navigate('FlnameSetting')}
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 200,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}
                    titleStyle={{
                        color: "black"
                    }}
                >

                    <Icon
                        name='chevron-right'
                        color={"#C5C5C5"}></Icon>
                </Button>


                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',
                        color: '#959595',

                    }}>หมายเลขโทรศัพท์
                </Text>
                <Button
                    onPress={() => navigation.navigate('NumberPhoneSetting')}
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 165,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>

                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 16,
                            fontFamily: 'NotoSansThai-SemiBold',

                        }}>xxx-xxx-xxxx</Text>
                    <Icon
                        name='chevron-right'
                        color={"#C5C5C5"}></Icon>
                </Button>

                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

                        color: '#959595',

                    }}>อีเมล
                </Text>
                <Button
                    onPress={() => navigation.navigate('EmailSetting')}
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 190,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>

                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 16,
                            fontFamily: 'NotoSansThai-SemiBold',

                        }}>lalawtalk@gmail.com</Text>
                    <Icon
                        name='chevron-right'
                        color={"#C5C5C5"}></Icon>
                </Button>
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

                        color: '#959595',

                    }}>รหัสผ่าน
                </Text>
                <Button
                    onPress={() => navigation.navigate('PasswordSetting')}
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 190,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>

                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 16,
                            fontFamily: 'NotoSansThai-SemiBold',

                        }}>รหัสผ่านของคุณ</Text>
                    <Icon
                        name='chevron-right'
                        color={"#C5C5C5"}></Icon>
                </Button>
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'NotoSansThai-VariableFont_wdth,wght',

                        color: '#959595',

                    }}>การเชื่อมต่อ
                </Text>
                <Button
                    onPress={() => navigation.navigate('LinkSetting')}
                    buttonStyle={{
                        backgroundColor: "#FFFF",
                        width: 190,
                        height: 40
                    }}
                    containerStyle={{ backgroundColor: "#FFFF" }}>

                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 16,
                            fontFamily: 'NotoSansThai-SemiBold',

                        }}>Facebook</Text>
                    <Icon
                        name='chevron-right'
                        color={"#C5C5C5"}></Icon>
                </Button>
            </View>







        </View>
    );
}
const styles = StyleSheet.create({
    container2: {
        width: 350,
        alignSelf: "center",

        padding: 12,
        backgroundColor: "#FFFF",
        margin: 10
    },
    imageContainer: {
        marginTop: -120,
        backgroundColor: "#FFFF"
    }
})
