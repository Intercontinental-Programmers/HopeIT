import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Image,
    Text,
    View,
    WebView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class RegistryScreen extends React.Component {
    static navigationOptions = {
        title: 'Registry',
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            
            username: "",
            password: "",
            passwordConf: "",
            nickName: "",
            firstName: "",
            secondName: "",
            
        }
    }

    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.flexBox1}>

                    <Text style={styles.text1}>
                        Registration
                    </Text>

                    <TextInput
                        style={styles.form}
                        placeholder="Username"
                        returnKeyType="go"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}/>
                    <TextInput/>

                    <TextInput
                        style={styles.form}
                        secureTextEntry={true}
                        placeholder="Password"
                        returnKeyType="go"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}/>
                    <TextInput/>

                    <TextInput
                        style={styles.form}
                        secureTextEntry={true}
                        placeholder="Confirm password"
                        returnKeyType="go"
                        onChangeText={(passwordConf) => this.setState({passwordConf})}
                        value={this.state.passwordConf}/>
                    <TextInput/>
                    <TextInput
                        style={styles.form}
                        secureTextEntry={true}
                        placeholder="Nickname"
                        returnKeyType="go"
                        onChangeText={(nickName) => this.setState({nickName})}
                        value={this.state.nickName}/>
                    <TextInput/>

                    <TextInput
                        style={styles.form}
                        secureTextEntry={true}
                        placeholder="First name"
                        returnKeyType="go"
                        onChangeText={(firstName) => this.setState({firstName})}
                        value={this.state.firstName}/>
                    <TextInput/>

                    <TextInput
                        style={styles.form}
                        secureTextEntry={true}
                        placeholder="Second name"
                        returnKeyType="go"
                        onChangeText={(secondName) => this.setState({secondName})}
                        value={this.state.secondName}/>
                    <TextInput/>


                    <TouchableOpacity style={styles.loginTouch} onPress={this._register}>
                        <Text style={styles.loginButton}>
                            Register
                        </Text>

                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        );
    }

    _register = () => {
    
        var data = {
          username: this.state.username,
          password: this.state.password,
          nickName: this.state.nickName,
          firstName: this.state.firstName,
          secondName: this.state.secondName,
        }
        console.log(JSON.stringify(data));
        fetch('http://207.154.221.96:3000/user/register', {
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
      }
    
     
    

}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        paddingTop: 3,
        backgroundColor: 'rgb(43, 72, 117)',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#fff',
        shadowOpacity: 0.2,
        shadowRadius: 20,
       
        
    },
    flexBox1: {
        flex: 0.85,
        width: "85%",
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: 'rgba(244, 246, 249, 0.9)',
        justifyContent: 'center',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        
        
    },
    text1: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    key: {
        alignItems: 'center'
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

    optionIconContainer: {
        marginRight: 9
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 3,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED'
    },
    optionText: {
        paddingHorizontal: 50,
        paddingVertical: 23,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#FFFFFF'
    },
    loginButton: {
        fontSize: 30,
        textAlign: 'center',
        color: '#eee',
        fontWeight: 'bold'
    },

    loginTouch: {
        
        width: '50%',
        padding: '1%',
        marginTop: '6%',
        backgroundColor: 'rgb(43, 72, 117)'
    }
});
