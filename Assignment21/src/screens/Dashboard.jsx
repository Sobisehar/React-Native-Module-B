import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Setting from '../components/Setting';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName='Home'  // Set initial route
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'white',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign color={color} name='home' size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="Contact" 
        component={Contact}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign color={color} name='phone' size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons color={color} name='settings-outline' size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}