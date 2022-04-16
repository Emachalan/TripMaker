/* eslint-disable react/react-in-jsx-scope */
import React, {useRef} from 'react';
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
      <Stack.Screen name="Home" options={{headerLeft: null}} component={Home} />
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

export const Navigation = ({navigationRef}) => {
  const showBottomTabs = item => {
    const arr = ['Login', 'MapView'];
    console.log('hsshs', item);

    return arr.includes(item);
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({navigation, route}) => ({
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {
          display: showBottomTabs(
            navigationRef?.current?.getCurrentRoute()?.name,
          )
            ? 'none'
            : 'flex',
        },
      })}
      tabBarOptions={{
        labelStyle: {fontSize: 18},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreenNavigator}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          tabBarLabel: 'SettingsScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="MapViewScreen"
        component={MapScreenNavigator}
        options={{
          tabBarLabel: 'MapViewScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
