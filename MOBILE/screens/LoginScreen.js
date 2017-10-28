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


var mail = "";
export default class LoginScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "aaaaaa@aa.aa",
      password: "bbbbbbbb"
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
            placeholder="username"
            returnKeyType="go"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username} />
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

          <View style={styles.flexBoxSmall}>

            <TouchableOpacity style={styles.loginTouchSmallLeft} onPress={this._toRegistry}>
              <Text style={styles.loginButtonSmall}>
                Register
                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.loginTouchSmallRight} onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('App');
            }}>
              <Text style={styles.loginButtonSmall}>
                Guest
                </Text>

            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  _login = () => {
    // alert(this.state.username + "   " + this.state.password); const {navigate} =

    var data = {
      username: this.state.username,
      password:  this.state.password,
    }

    fetch('http://207.154.221.96:3000/user/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(response => {
        
        if(response.ok != false){
         
               //alert(response._bodyTesxt.usernamme)
          //console.log(JSON.parse(response._bodyText).username)
          //alert(this.state.username)
          let uset = JSON.parse(response._bodyText).username;

          //console.log(uset);
          if(uset == this.state.username ){
            mail = JSON.parse(response._bodyText).username;
            //alert(LoginScreen.mail);
            const { navigate } = this.props.navigation;
            navigate('App');
          }
        }else{
          alert("Złe hasło!")
        }
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

  loginTouchSmallLeft: {
    
    marginLeft: '60%',
    padding: '2%',
    width: "30%",
    alignItems: 'center',
    backgroundColor: '#1F305A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(50, 70, 70, 0.7)',
    position: "absolute"
  },

  loginTouchSmallRight: {

    marginRight: '60%',
    padding: '2%',
    width: "30%",
    alignItems: 'center',
    backgroundColor: '#1F305A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(50, 70, 70, 0.7)',
    position: "absolute"
  },

  flexBoxSmall: {
    position: "absolute",
    bottom: "6.5%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  form: {

    padding: '2%',
    width: "75%",
    textAlign: 'center',
    color: 'rgba(30, 30, 30, 0.8)',
    backgroundColor: 'rgb(237, 244, 255)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(50, 70, 70, 0.7)',

  },
  img: {

    height: 300,
    borderRadius: 150,
    width: 300,
    marginTop: '5%',
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

  loginButtonFirst: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },

  loginButtonSmall: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  }
});

export {mail}