import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login';
import Loginphone from './Component/Loginphone';
import Register from './Component/Register';
import Mainpage1 from './Component/Mainpage1';
import Mainpage2 from './Component/Mainpage2';
import Mainpage3 from './Component/Mainpage3';
import Services1 from './Component/Services1';
import Choicepage from './Component/Choicepage';
import Paypage from './Component/Paypage';
import Loadwaiting from './Component/Loadwaiting';
import ProfileScreen from './Screen/ProfileScreen';
import Paypage2 from './Component/Paypage2';
import Payfinish from './Component/Payfinish';
import Addmoneyfinish from './Component/Addmoneyfinish';
import Homemodal1 from './Screen/Homemodal1';
import Homemodal2 from './Screen/Homemodal2';
import Choicemodal1 from './Component/Choicemodal1';
import Choicemodal2 from './Component/Choicemodel2';
import Qrcom from './Component/Qrcom';
import DescribeConsult from './Component/DescribeConsult';
import ShowConsult from './Component/ShowConsult';
import Profile2 from './Screen/Profile2';
import FlnameSetting from './Screen/FlnameSetting';
import NumberPhoneSetting from './Screen/NumberPhoneSetting';
import PasswordSetting from './Screen/PasswordSetting';
import EmailSetting from './Screen/EmailSetting';
import LinkSetting from './Screen/LinkSetting';
import About from './Screen/About';
import ChatApp from './Component/ChatApp';
import ChatRoomPage from './Component/ChatRoomPage';
import ChatScreen from './Screen/ChatScreen';


const Stack = createNativeStackNavigator();



const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       

       
     
          
          


         
 
          <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          />
         <Stack.Screen
          name="ChatRoomPage"
          component={ChatRoomPage}
          />
      
      
        

       

</Stack.Navigator>
      
    </NavigationContainer>



  )
};
export default App