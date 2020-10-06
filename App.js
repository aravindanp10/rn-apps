import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Componentscreen from './src/screens/Componentscreen';
import listscreen from './src/screens/listscreen';
import ImageScreen from './src/screens/ImageScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Components: Componentscreen,
    list:listscreen,
   Image: ImageScreen,
   Count: CounterScreen,
   Color: ColorScreen 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home"
    }
  }
);

export default createAppContainer(navigator);





