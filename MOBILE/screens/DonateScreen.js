import React, { Component } from 'react';
import {
    Modal,
    Text,
    View,
    WebView,
    TouchableHighlight,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

var variable = 'null';

export default class DonateScreen extends React.Component {
    static navigationOptions = {
        title: 'Donate',
        header: null
    };

    state = {
        modalVisible: false
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }



    render() {
        return (
            <View style={{
                marginTop: 100
            }}>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {!this.setModalVisible(false)}}>
                        
                        <WebView
                            source={{
                                uri: variable
                            }}
                            style={{
                                marginTop: 2
                            }} />

                        <Button
                            style={styles.comeback}
                            onPress={() => {
                                !this.setModalVisible(false)
                            }}
                            title="CLOSE"
                            color="#BBBBBB"
                            accessibilityLabel="Learn more about this purple button" />
                        
                    </Modal>

                    <TouchableHighlight
                        onPress={() => {
                            variable = 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=10&opis=Test';
                            this.setModalVisible(true);
                        }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/dotpay.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{
                                width: 96,
                                height: 69,
                                marginTop: 1
                            }} />

                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            variable = 'http://developers.payu.com/pl/';
                            this.setModalVisible(true);
                        }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/payu.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{
                                width: 96,
                                height: 69,
                                marginTop: 1
                            }} />

                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            variable = 'https://www.przelewy24.pl/';
                            this.setModalVisible(true);
                        }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/przelewy24.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{
                                width: 96,
                                height: 69,
                                marginTop: 1
                            }} />

                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            variable = 'http://207.154.221.96:3000/paypal/88/PLN';
                            this.setModalVisible(true);
                        }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/paypal.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{
                                width: 96,
                                height: 69,
                                marginTop: 1
                            }} />

                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center'
    },
    comeback: {
        height: 30
    }
});