import React, {Component} from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/style';
import {
    Actions,
} from 'react-native-router-flux';

class demo extends Component {
    constructor(props) {
        super(props)
    }

    async _logout() {
        try {
            await AsyncStorage.removeItem('id_token');
            Alert.alert('Logout Success!');
            Actions.authPage();
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Shake or press menu button for dev menu
                </Text>
                <TouchableOpacity onPress={this._logout}>
                    <Text> {'\n'}Log Out </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default demo;