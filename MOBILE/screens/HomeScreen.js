import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Text, View, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Watch ads', header: null
  };

  render() {
    return (
      <View style={styles.container}>
      
      <Image style={styles.img} source={require('../assets/images/robot-dev.png')}/>
      
    </View>
    );
  }
  _handleAddWatch = () => {
    WebBrowser.openBrowserAsync('https://i1.jbzdy.pl/contents/2017/10/7126edd068d04f3b7077849dec6cb3dc.mp4');
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flex: 1,
    paddingTop: 3,
    backgroundColor: '#fff',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 3,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    paddingHorizontal: 50,
    paddingVertical: 23,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#FFFFFF',
  },

  img: {
    flexDirection: "column",
    height: 200,
    borderRadius: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },

});






