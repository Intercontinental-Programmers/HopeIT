import React, { Component } from 'react';
import {
    Modal,
    Text,
    View,
    WebView,
    TouchableHighlight,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';


export default class DonateScreen extends React.Component {
    static navigationOptions = {
        title: 'Donate', header: null
    };

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { !this.setModalVisible(false) }}
                    >
                        <WebView
                            source={{ uri: 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=10&opis=Test' }}
                            style={{ marginTop: 2 }}
                        />

                        <Button style={styles.comeback}
                            onPress={() => { !this.setModalVisible(false) }}
                            title="CLOSE"
                            color="#BBBBBB"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Modal>

                    <TouchableHighlight onPress={() => { this.setModalVisible(true) }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/dotpay.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{ width: 96, height: 69, marginTop: 1 }}
                        />

                    </TouchableHighlight></View>
                <View style={{ marginTop: 15 }}>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { !this.setModalVisible(false) }}
                    >
                        <WebView
                            source={{ uri: 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=10&opis=Test' }}
                            style={{ marginTop: 2 }}
                        />

                        <Button style={styles.comeback}
                            onPress={() => { !this.setModalVisible(false) }}
                            title="CLOSE"
                            color="#BBBBBB"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Modal>

                    <TouchableHighlight onPress={() => { this.setModalVisible(true) }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/paypal.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{ width: 96, height: 69, marginTop: 1 }}
                        />

                    </TouchableHighlight></View>

                    <View style={{ marginTop: 15 }}>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { !this.setModalVisible(false) }}
                    >
                        <WebView
                            source={{ uri: 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=10&opis=Test' }}
                            style={{ marginTop: 2 }}
                        />

                        <Button style={styles.comeback}
                            onPress={() => { !this.setModalVisible(false) }}
                            title="CLOSE"
                            color="#BBBBBB"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Modal>

                    <TouchableHighlight onPress={() => { this.setModalVisible(true) }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/przelewy24.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{ width: 96, height: 69, marginTop: 1 }}
                        />

                    </TouchableHighlight></View>

                                    <View style={{ marginTop: 15 }}>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { !this.setModalVisible(false) }}
                    >
                        <WebView
                            source={{ uri: 'https://ssl.dotpay.pl/test_payment/?id=726300&kwota=10&opis=Test' }}
                            style={{ marginTop: 2 }}
                        />

                        <Button style={styles.comeback}
                            onPress={() => { !this.setModalVisible(false) }}
                            title="CLOSE"
                            color="#BBBBBB"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Modal>

                    <TouchableHighlight onPress={() => { this.setModalVisible(true) }}
                        style={styles.button}
                        underlayColor='#2b4875'>
                        <Image
                            source={require('../assets/images/payu.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{ width: 96, height: 69, marginTop: 1 }}
                        />

                    </TouchableHighlight></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    comeback: {
        height: 30,
    },
});