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
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import {WebBrowser} from 'expo';
import RootNavigation from '../navigation/RootNavigation';
import {StackNavigator} from 'react-navigation';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  static navigationOptions = {
    header: null
  };

  render() {

    return (

      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/images/logo.png')}/>

          <View style={styles.flexBox1}>

            <TextInput
              style={styles.form}
              placeholder="username"
              returnKeyType="go"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}/>
            <TextInput/>

            <TextInput
              style={styles.form}
              secureTextEntry={true}
              placeholder="password"
              returnKeyType="go"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
            <TextInput/>

            <TouchableOpacity style={styles.loginTouch} onPress={this._login}>
              <Text style={styles.loginButton}>
                Login
              </Text>

            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
  _login = () => {
    const {navigate} = this.props.navigation;
    
    navigate('App');
  
    var data = {
      client_id: "Adt3bLhhhvutjmFRlEyiImUIEEjVPGlxFM_1Do_hQBo-wroVDNrSTtbHUjqyf_dIM8Y1rmEcCQZh6TKa",
      client_secret: "EFJqsYD4cERumo4gOHU79Igdv1DaQnTTAgOgZu1Aob9i8LUYsveEVfDGml7vta7Ux0xJvQpdko1FHWGq",
      total: 69,
      currency: "PLN",
      desc: "hurr durr"
    }
    fetch('http://207.154.221.96:3000/paypal', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',}

      }).then(response => response.json()).then(response => {
        alert(JSON.stringify(response));
      }).done();}
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
      flex: 0.95,
      //marginTop: '40%',
      width: "95%",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      height: '20%',
      width: '100%',
      padding: '0.5%',
      textAlign: 'center',
      color: 'rgba(232, 238, 250, 0.7)',
      backgroundColor: 'rgba(232, 238, 247, 0.4)'
    },
    img: {
      flexDirection: "column",
      height: 300,
      borderRadius: 150,
      width: 300,
      marginTop: '25%',
      borderWidth: 1,
      borderColor: '#fff',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center'
    },

    loginTouch: {
      width: '100%',
      height: '20%',
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