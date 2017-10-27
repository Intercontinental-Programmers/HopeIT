import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,} from 'react-native';
import { WebBrowser } from 'expo';
import RootNavigation from '../navigation/RootNavigation';
import { StackNavigator, } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      <Image style={styles.img}  source={require('../assets/images/dotpay.png')}/>
      <View>
        <Button
          onPress={() =>
          navigate('App')
        }
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#387eed'
  },  flexBox1: {
    flex: 0.25,
    width: "95%",
    flexDirection: "column",
    borderRadius: 100,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
   },  form: {
    width: '80%',
    padding: '0.5%',
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(120,120,120,0.8)'
  },  img:{
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
    justifyContent: 'center',
  }
});