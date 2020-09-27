import React from 'react'
import {
  createAppContainer,
  createStackNavigation,
  createSwitchNavigator
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ResultScreen from './src/Screens/ResultScreen';
import ShowList from './src/Screens/ShowList';
import SubscriptionScreen from './src/components/AuthForm';
import SignInScreen from './src/Screens/SignInScreen';
import ShopScreen from './src/Screens/ShopScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import ResultSearchScreen from './src/Screens/ResultSearchScreen';
import ResultShopScreen from './src/Screens/ResutlShopsScreen';
const navigator = createSwitchNavigator(
  {
    login: createStackNavigator({
      Inscription: SignUpScreen,
      Connexion: SignInScreen
    }),

    mainBottom: createBottomTabNavigator({
      Influencers: createStackNavigator({
        Influenceurs: ResultScreen,
        InfluenceursRecherche: ResultSearchScreen,
        Placements: ShowList,
        Shops: ShopScreen,
        Profile: ProfileScreen
      }),
      shops: createStackNavigator({
        Shops: ShopScreen,
        ShopsRecherche: ResultShopScreen
      }),
      profile: createStackNavigator({
        Profile: ProfileScreen
      }),

    })
  });

export default createAppContainer(navigator); 