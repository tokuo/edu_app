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
            email: null,
            password: null,
            password_confirmation: null
        }
        this._signup = this._signup.bind(this);
    }

    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    _signup = ()=>{
        if (!this.state.username || !this.state.email || !this.state.password) {
            Alert.alert('type it!');
            return;
        }
        fetch('http://127.0.0.1/api/v1/users', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.saveItem('id_token', responseData.user.access_token),
            Actions.homePage();
        })
        .done();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Sign_up </Text>

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
                    placeholder='パスワード'
                    ref='password'
                    returnKeyType='next'
                    secureTextEntry={true}
                    style = {styles.inputText}
                    value={this.state.password}
                />

                <TextInput
                    editable={true}
                    onChangeText={(password_confirmation) => this.setState({password_confirmation})}
                    placeholder='確認用パスワード'
                    ref='password_confirmation'
                    returnKeyType='next'
                    secureTextEntry={true}
                    style = {styles.inputText}
                    value={this.state.password_confirmation}
                />

                <TouchableOpacity onPress={this._signup}>
                    <Text> Sign Up </Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={Actions.authPage1}>
                    <Text> {'\n'}change to sign_in </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default auth;