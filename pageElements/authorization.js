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
            username: null,
            password: null
        }
        this._login = this._login.bind(this);
        this._signup = this._signup.bind(this);
    }

    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    _login = ()=>{
        if (!this.state.username || !this.state.password) {
            Alert.alert('type it!');
            return;
        }
        fetch('http://', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: this.state.username,
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

    _signup = ()=>{
        if (!this.state.username || !this.state.password) {
            Alert.alert('type it!');
            return;
        }
        fetch('http://', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: this.state.username,
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
                <Text style={styles.welcome}> Log_in or Sign_up </Text>

                <View>
                <TextInput
                    editable={true}
                    onChangeText={(username) => this.setState({username})}
                    placeholder='Username'
                    ref='username'
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

                <TouchableOpacity onPress={this._signup}>
                    <Text> Sign Up </Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={Actions.homePage}>
                    <Text> {'\n'}demo(change to homePage) </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default auth;