import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Text, View, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
  };

  render() {
    return (
      <WebView
        source={{ uri: 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=5.69&opis=Test' }}
        style={{ marginTop: 2 }}
      />

      /*<ScrollView style={styles.container}>
      <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._handleDotPay}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/dotpay.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 60, height: 20, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Donate 5.69 with dotpay
            </Text>
          </View>
        </View>
      </Touchable>
      
      </ScrollView>*/
    );
  }
  /*_handleDotPay = () => {
    WebBrowser.openBrowserAsync('https://ssl.dotpay.pl/test_payment/?id=726300&kwota=5.69&opis=Test');
  };*/
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
});*/
