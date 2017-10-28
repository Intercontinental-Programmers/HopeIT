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
            
            <View style={styles.flexBox2}>
              <TouchableOpacity style={styles.loginTouch2} onPress={this._login}>
                <Text style={styles.loginButton2}>
                  Forget 
                </Text>

              </TouchableOpacity>
               <TouchableOpacity style={styles.loginTouch2} onPress={this._login}>
                <Text style={styles.loginButton2}>
                  Register
                </Text>

              </TouchableOpacity>

            </View>
            
        

     
      </KeyboardAvoidingView>
    );
  }
  _login = () => {
    // alert(this.state.username + "   " + this.state.password); const {navigate} =
    const {navigate} = this.props.navigation;
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(43, 72, 117)',
   
  },

  flexBox1: {
    flex: 12,
    flexDirection: "column",
    alignItems: 'center',
    
  },

  flexBox2: {
    position: "absolute",
    bottom:"6.5%",
    width: "100%",
    
    flexDirection: "row",
    alignItems: "center",
   
    
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
    width: '100%',
    padding: '1%',
    marginTop: '6%',
    backgroundColor: 'rgb(45, 88, 155)'
  },
  loginTouch2: {
    width: "40%",
    borderColor: 'rgb(43,72,117)',
    borderWidth:1,
    backgroundColor: 'rgb(45, 88, 155)'
  },
  loginButton: {
    fontSize: 30,
    textAlign: 'center',
    color: '#eee',
    fontWeight: 'bold'
  },
  loginButton2: {
    fontSize: 15,
    textAlign: 'center',
    color: '#eee',

  }
});
