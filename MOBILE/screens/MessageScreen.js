import React from 'react';
import {ExpoConfigView} from '@expo/samples';
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
import {mail} from '../screens/LoginScreen';

var s = new Set();
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Message',
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
          key: "↧"
        }
      ],
      topic: [{
          topic: "keppo"
      }]
    }

    data = {
      username: mail
    }

  }
  rere = () => {

    addNewLines = (str) => {
        let result = "";
        while(str.length > 0) {
            result += str.substring(0,35) + "-\n";
            str = str.substring(35);
        }
        return result;
    }

    var temp = [];
    var temp2 = [];
    data = {
        username: mail
      }
    fetch('http://207.154.221.96:3000/user/get_messages', {
      method: 'POST',
      body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }

      })
      .then(response => response.json())
      .then(response => {
          console.log(response)
        for(res in response) {
          if(response[res].body != undefined && response[res].body != "") {
            temp.push({ key: ""+
               addNewLines(response[res].body)
            });
          }
          if(response[res].topic != undefined && response[res].topic != "") {
            temp2.push({ 
                topic: ""+
                addNewLines(response[res].topic)
            });
          }
      }
        // console.log(response);
        // alert(temp);
       
        this.setState({key: temp, topic: temp2});
        
      })
      .done();
    this.setState({refreshing: false})
  }

  render() {
    return (

      <View style={styles.container}>
        <FlatList
          data={this.state.key}
          title={this.state.key}
          refreshing={false}
          onRefresh = {this.rere} 
          renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>} 
          />
      </View>
      ); 
    }
  }

  const styles = StyleSheet.create({

    container: {
      flex:0.9,
      flexDirection: "column",
      alignItems: 'center',
      
    },
    text: {
      color: 'white',
      width:"100%",
      fontSize: 20,
      padding: 30,
      marginTop: 5,
      borderColor: "black",
      borderWidth:1,
      backgroundColor: '#2b4875',
      alignItems: 'center',
    },
    tetxt:{

      width:"100%",
      backgroundColor: 'rgb(197, 216, 247)',
    }

    });