import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DonateScreen from '../screens/DonateScreen';
import LinksScreen from '../screens/LinksScreen';
import MessageScreen from '../screens/MessageScreen';
import HistoryScreen from '../screens/HistoryScreen';


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Donate: {
      screen: DonateScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Message: {
      screen: MessageScreen,
    },
    History: {
      screen: HistoryScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'Donate':
            iconName = Platform.OS === 'ios'
              ? `ios-cash${focused ? '' : '-outline'}`
              : 'md-cash';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios'
              ? `ios-link${focused ? '' : '-outline'}`
              : 'md-link';
            break;
          case 'Message':
            iconName = Platform.OS === 'ios'
              ? `ios-chatboxes${focused ? '' : '-outline'}`
              : 'md-chatboxes';
            break;
          case 'History':
            iconName = Platform.OS === 'ios'
              ? `ios-refresh${focused ? '' : '-outline'}`
              : 'md-refresh';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#ffffff',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#2b4875',
        height: 60,
      },
      
    }

  }
);
