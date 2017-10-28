import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { GiftedChat } from 'react-native-gifted-chat';


export default class SettingsScreen extends React.Component {
    static navigationOptions = { title: 'Messages', header: null };
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

    render() {
        return (
            <GiftedChat
                renderInputToolbar={() => null}
                renderComposer={() => null}
                minInputToolbarHeight={0}
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1,

                }}
            />
        );
    }

}

