import React, {Component} from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import styles from '../styles/style';
import {
    Actions
} from 'react-native-router-flux';



class auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
        this._login = this._login.bind(this);
    }

    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    _login = ()=>{
        if (!this.state.email || !this.state.password) {
            Alert.alert('type it!');
            return;
        }
        fetch('http://127.0.0.1/api/v1/login', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.saveItem('id_token', responseData.id_token),
            Actions.homePage();
        })
        .done();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Log_in </Text>

                <View>
                <TextInput
                    editable={true}
                    onChangeText={(email) => this.setState({email})}
                    placeholder='email'
                    ref='email'
                    returnKeyType='next'
                    style = {styles.inputText}
                    value={this.state.username}
                />

                <TextInput
                    editable={true}
                    onChangeText={(password) => this.setState({password})}
                    placeholder='Password'
                    ref='password'
                    returnKeyType='next'
                    secureTextEntry={true}
                    style = {styles.inputText}
                    value={this.state.password}
                />

                <TouchableOpacity onPress={this._login}>
                    <Text> Log In </Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={Actions.authPage2}>
                    <Text> {'\n'}change to sign_in </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Actions.homePage}>
                    <Text> {'\n'}demo(change to homePage) </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default auth;