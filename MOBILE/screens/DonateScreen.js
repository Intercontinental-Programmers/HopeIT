import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Text, View, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate', header: null };

  render() {
    return (
      <WebView
        source={{ uri: 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=10&opis=Test' }}
        style={{ marginTop: 2 }}
      />
    );
  }
}