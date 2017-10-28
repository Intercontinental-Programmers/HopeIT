import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  WebView,
  Ui
} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  render() {
    return (
      <View style={styles.container}>

        <WebView style={{marginTop: 120, alignItems: 'center'}}
          javaScriptEnabled={true}
          mixedContentMode="always"
          thirdPartyCookiesEnabled={true}
          source={require('../assets/pages/index.html')
        }></WebView>

      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    marginTop: 2,
    flex: 1,
    paddingTop: 3,
    backgroundColor: '#fff'
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

  img: {
    flexDirection: "column",
    height: 200,
    borderRadius: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
