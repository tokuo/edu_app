import React from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from '../styles/style';
import {
    Actions,
} from 'react-native-router-flux';



class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            demo: 'tokuo'
        }
        this._logout = this._logout.bind(this);
        this.getProtectedQuote = this.getProtectedQuote.bind(this);
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

    getProtectedQuote() {
        AsyncStorage.getItem('id_token').then((token) => {
            fetch('http://', {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then((response) => response.text())
            .then((quote) => {
                Alert.alert('Chuck Norris Quote', quote)
            })
            .done();
            }
    )}
                                                                              
    render(){
        return(
            <View style={styles.container}>
                <Text>
                Welcome to React Native!,{'\n'}
                {this.props.name}
                </Text>
                <TouchableOpacity onPress={this._logout}>
                    <Text> {'\n'}Log Out </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.demoPage}>
                    <Text> {'\n'}demo(change to demoPage) </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default home;