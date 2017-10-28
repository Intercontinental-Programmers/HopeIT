import React from 'react';
import { ExpoConfigView } from '@expo/samples';
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
  KeyboardAvoidingView,
  ListView
} from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = { title: 'History', header: null };

  state = {
    names: [
      {
        id: 0,
        name: 'Adiran Mucha',
      },
      {
        id: 1,
        name: 'Mateusz Walczak',
      },
      {
        id: 2,
        name: 'Maciej Dziadyk',
      },
      {
        id: 3,
        name: 'Michał Treter',
      }
    ]
  }
  alertItemName = (item) => {
    alert(item.name)
  }
  render() {
    return (
      <View>
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}>

              <Text style={styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
    backgroundColor: '#2b4875',
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  }
})