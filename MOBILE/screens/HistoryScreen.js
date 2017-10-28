import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  ListView
} from 'react-native';
import {mail} from '../screens/LoginScreen';

export default class SettingsScreen extends React.Component {
  static navigationOptions = { title: 'History', header: null };

  constructor() {
    super();
    data = {
      user : mail,
    }
    
    fetch('http://207.154.221.96:3000/transactions', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(response => response.json())
      .then(response => {
        alert(JSON.stringify(response));
      })
      .done();


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}