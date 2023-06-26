import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  View, Text, StyleSheet, Image, ImageBackground, ViewProps, props, ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

// Screens
import HomeScreen from '../Screen/HomeScreen';
import ChatScreen from '../Screen/ChatScreen';
import AdmireScreen from '../Screen/AdmireScreen';
import ProfileScreen from '../Screen/ProfileScreen';



//Screen names
const homeName = "Home";
const chatName = "chat";
const admireName = "admire";
const profileName = "profile";


const Tab = createBottomTabNavigator();

function Services1() {
  return (
    
    
      <Tab.Navigator
        initialRouteName={homeName}
        
        screenOptions={({ route }) => ({
         
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarLabelStyle: { paddingBottom: 20, fontSize: 10, },
          tabBarShowLabel: false ,
          tabBarStyle: { position: 'absolute', padding: 10, height: 50,  },
          tabBarBackground:() =>(
            <LinearGradient  colors={[ '#FF6966','#FF1F1F']} 
            style={{height:70,borderTopLeftRadius:15,borderTopRightRadius:15}}/>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === chatName) {
              iconName = focused ? 'chatbox' : 'chatbox-outline';

            } else if (rn === admireName) {
              iconName = focused ? 'heart' : 'heart-outline';
            }else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        

        >

        <Tab.Screen name={homeName} component={HomeScreen} options = {{headerShown: false}} />
        <Tab.Screen name={admireName} component={AdmireScreen} options = {{headerShown: false}} />
        <Tab.Screen name={chatName} component={ChatScreen} options = {{headerShown: false}}/>
        <Tab.Screen name={profileName} component={ProfileScreen} options = {{headerShown: false}} />

        

      </Tab.Navigator>
    
  );
}

export default Services1;