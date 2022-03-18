/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../screens/container/Settings';
import Home from '../screens/container/Home';
import MapView from '../screens/container/MapView';
import Login from '../screens/container/Login';
import MakeTrip from '../screens/container/MakeTrip';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MakeTrip" component={MakeTrip} />
    </Stack.Navigator>
  );
};

const MapScreenNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen name="MapView" component={MapView} />
      </Stack.Navigator>
    );
  };

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
      tabBarOptions={{
        labelStyle: {fontSize: 18},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="MapView"
        component={MapScreenNavigator}
        options={{
          tabBarLabel: 'MapView',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
