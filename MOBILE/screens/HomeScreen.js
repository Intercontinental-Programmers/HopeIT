import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from 'react-native';
import {WebBrowser} from 'expo';
import RootNavigation from '../navigation/RootNavigation';
import {StackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/images/logo.png')}/>

        <View style={styles.flexBox1}>

          <TextInput
            style={styles.form}
            placeholder="username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}/>
          <TextInput/>

          <TextInput
            style={styles.form}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}/>
          <TextInput/>

          <TouchableOpacity style={styles.loginTouch} onPress={() => navigate('App')}>
            <Text style={styles.loginButton}>
              Login
            </Text>

          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

login = () => {
  alert(this.state.username + "   " + this.state.password);
  navigate('App');
  // var data = {   "username": 'Maku',   "password": 'daasd' }
  // fetch('http://207.154.221.96:8080/', {   method: 'POST',   headers: {
  // 'Accept': '/',     'Accept-Encoding': 'gzip, deflate',     'Content-Length':
  // '21',     'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent':
  // 'runscope/0.1'   },     body: JSON.stringify(data)   }) .then(response =>
  // response.json())   .then(response => { alert(JSON.stringify(response));   })
  //  .done();

}

/* <View>
<Button
onPress={() =>
navigate('App')
}
title="Login"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(43, 72, 117)'
  },
  flexBox1: {
    flex: 0.65,
    marginTop: '40%',
    width: "95%",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    height: '35%',
    width: '100%',
    padding: '0.5%',
    textAlign: 'center',
    color: 'rgba(232, 238, 250, 0.7)',
    backgroundColor: 'rgba(232, 238, 247, 0.4)'
  },
  img: {
    flexDirection: "column",
    height: 200,
    borderRadius: 100,
    width: 200,
    marginTop: '25%',
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginTouch: {
    width: '100%',
    height: '35%',
    padding: '1%',
    backgroundColor: 'rgb(45, 88, 155)'
  },
  loginButton: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#eee',
    fontWeight: 'bold'
  }
});