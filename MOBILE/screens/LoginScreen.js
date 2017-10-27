import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

  }

  render() {
    return (

      //Where Am i
          <View>
            <MonoText>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>



    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  statusBarUnderlay: {
    height: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  
});
