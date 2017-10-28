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
  ListView,
  FlatList,
  RefreshControl
} from 'react-native';
import { mail } from '../screens/LoginScreen';

var s = new Set();
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      id: "",
      name: "das",
      key: [
        {
          key: ""
        }
      ]
    }

    data = {
      user: mail
    }

  }
  rere = () => {
    var temp = [];
    fetch('http://207.154.221.96:3000/transactions', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(response => response.json())
      .then(response => {
        for (res in response) {
          temp.push({
            key: "" +
            response[res].payer.status + "\n" + response[res].transactions[0].amount.total + " " + response[res].transactions[0].amount.currency + " " + response[res].create_time
          });
        }

        //alert(JSON.stringify(response));

        this.setState({ key: temp });

      })
      .done();
    this.setState({ refreshing: false })
  }

  render() {
    return (

      <View style={styles.container}>
        <FlatList
          data={this.state.key}
          title={this.state.key}
          refreshing={false}
          onRefresh={this.rere}
          renderItem={({ item }) => <Text style={styles.text}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 0.9,
    flexDirection: "column",
    alignItems: 'center',

  },
  text: {
    color: 'white',
    width: "100%",
    fontSize: 20,
    padding: 30,
    marginTop: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: '#2b4875',
    alignItems: 'center',
  },
  tetxt: {

    width: "100%",
    backgroundColor: 'rgb(197, 216, 247)',
  }

});