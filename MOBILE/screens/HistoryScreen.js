import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import {mail} from '../screens/LoginScreen';
import {
  Image,
  Text,
  View,
  ListView,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = { title: 'History', header: null };



  constructor() {
    super();
    data = {
      user : mail,
    }
    
    fetch('http://207.154.221.96:3000/transactions', {
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


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: require('../assets/images/logo.png'),
                    },
                },
            ],
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    renderBubble(props) { return ( <Bubble {...props} 
        
                        textStyle={{
                            left: {
                                color: 'white',
                            }
                        }}
                        wrapperStyle={{
                            left: {
                                backgroundColor: '#2b4875',
                                width: '98%',
                            },
                        }}
                    />
                );
            }

    render() {
        return (
            <GiftedChat
                renderInputToolbar={() => null}
                renderComposer={() => null}
                minInputToolbarHeight={0}
                renderAvatar={null}
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1,

                }}
                renderBubble={this.renderBubble.bind(this)}
            />
        );
    }
}