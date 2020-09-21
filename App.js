import React from 'react'
import{
  createAppContainer,
  createStackNavigation,
  createSwitchNavigator
} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import ResultScreen from './src/Screens/ResultScreen';
import ShowList from './src/Screens/ShowList';
import SubscriptionScreen from './src/components/AuthForm';
import SignInScreen from './src/Screens/SignInScreen';
import ShopScreen from './src/Screens/ShopScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
const navigator = createSwitchNavigator(
  { 
    login: createStackNavigator({
      Signup: SignUpScreen,
      Signin: SignInScreen
    }),
   
    mainBottom: createBottomTabNavigator({
      Influencers: createStackNavigator({
        ResultScreen: ResultScreen,
        Show: ShowList,
        Shops: ShopScreen,
        Profile: ProfileScreen
    }),
    shops: createStackNavigator({
        Shops: ShopScreen,
    }),
    profile: createStackNavigator({
      Profile: ProfileScreen
  }),
        
  })
  });

export default createAppContainer(navigator); 