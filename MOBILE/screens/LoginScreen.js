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
import { WebBrowser } from 'expo';
import RootNavigation from '../navigation/RootNavigation';
import { StackNavigator } from 'react-navigation';

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

        <Image style={styles.img} source={require('../assets/images/logo.png')} />

        <View style={styles.flexBox}>

          <TextInput
            style={styles.form}
            secureTextEntry={true}
            placeholder="username"
            returnKeyType="go"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.password} />
          <TextInput />

          <TextInput
            style={styles.form}
            secureTextEntry={true}
            placeholder="password"
            returnKeyType="go"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
          <TextInput />

          <TouchableOpacity style={styles.loginTouch} onPress={this._login}>
            <Text style={styles.loginButtonFirst}>
              Login
              </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.loginTouchSmall} onPress={this._toRegistry}>
            <Text style={styles.loginButtonSecond}>
              Register
                </Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.loginTouchSmall} onPress={this._login}>
            <Text style={styles.loginButtonSecond}>
              Guest
                </Text>

          </TouchableOpacity>

        </View>




      </KeyboardAvoidingView>
    );
  }
  _login = () => {
    // alert(this.state.username + "   " + this.state.password); const {navigate} =
    const { navigate } = this.props.navigation;
    navigate('App');

    var data = {
      client_id: "Adt3bLhhhvutjmFRlEyiImUIEEjVPGlxFM_1Do_hQBo-wroVDNrSTtbHUjqyf_dIM8Y1rmEcCQZh6TKa",
      client_secret: "EFJqsYD4cERumo4gOHU79Igdv1DaQnTTAgOgZu1Aob9i8LUYsveEVfDGml7vta7Ux0xJvQpdko1FHWGq",
      total: 69,
      currency: "PLN",
      desc: "hurr durr"
    }
    console.log(JSON.stringify(data));
    fetch('http://207.154.221.96:3000/paypal', {
      method: 'POST',
      body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }

      })
      .then(response => response.json())
      .then(response => {
        alert(JSON.stringify(response.id));
      })
      .done();
  }

  _toRegistry = () => {
    const { navigate } = this.props.navigation;
    navigate('Registry');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(43, 72, 117)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 20,
  },

  flexBox: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',

  },

  flexBoxSmall: {
    position: "absolute",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  form: {

    padding: '2%',
    width: "75%",
    textAlign: 'center',
    color: 'rgba(232, 238, 250, 0.7)',
    backgroundColor: 'rgb(237, 244, 255)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(50, 70, 70, 0.7)',

  },
  img: {

    height: 300,
    borderRadius: 150,
    width: 300,
    marginTop: '15%',
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },

  loginTouch: {

    padding: '2%',
    width: "100%",
    alignItems: 'center',
    backgroundColor: '#1F305A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(50, 70, 70, 0.7)',

  },

  loginTouchSmall: {
    marginTop: 13,
    padding: '2%',
    width: "30%",
    alignItems: 'center',
    backgroundColor: '#1F305A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(50, 70, 70, 0.7)',
  },

  loginButtonFirst: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  loginButtonSecond: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',

  }
});