import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, } from '@rneui/themed';

const Choicepage = () => {
   
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
                    raised><Image source={require('../img/Lawyer.png')}
                        style={{
                            width: 50,
                            height: 50

                        }}></Image>
                    <Text style={{
                        color: '#FBD653',
                        marginHorizontal: 26,
                        fontSize: 25,
                        fontFamily: 'NotoSansThai-SemiBold',
                    }}>กับนักกฎหมาย</Text>
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

            </View>



        </View>
    )
}

export default Choicepage


const styles = StyleSheet.create({

    container: {

        backgroundColor: "#FFFF",
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        flex: 1,
        marginTop:-150,
        padding:0

    }

})
