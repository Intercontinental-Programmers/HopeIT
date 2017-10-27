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
      <ScrollView style={styles.container}>
        <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._handleAddWatch}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/add2.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 96, height: 64, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
              Watch this advertisement!
          </Text>
          </View>
        </View>
      </Touchable>

        <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._handleAddWatch}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/add1.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 96, height: 64, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
            Watch this advertisement!
          </Text>
          </View>
        </View>
      </Touchable>

        <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._handleAddWatch}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/add2.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 96, height: 64, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
            Watch this advertisement!
          </Text>
          </View>
        </View>
      </Touchable>

        <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._handleAddWatch}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/add1.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 96, height: 64, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
            Watch this advertisement!
          </Text>
          </View>
        </View>
      </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handleAddWatch}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/add2.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 96, height: 64, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
              Watch this advertisement!
            </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
        style={styles.option}
        background={Touchable.Ripple('#ccc', false)}
        onPress={this._handleAddWatch}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Image
              source={require('../assets/images/add1.png')}
              resizeMode="contain"
              fadeDuration={0}
              style={{ width: 96, height: 64, marginTop: 1 }}
            />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>
            Watch this advertisement!
          </Text>
          </View>
        </View>
      </Touchable>

      </ScrollView>
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
});