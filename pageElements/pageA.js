import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';
import styles from '../styles/style';
import {
    Actions,
} from 'react-native-router-flux';

class PageA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            demo:''
        }
        this._changeToPageB = this._changeToPageB.bind(this);
    }

    _changeToPageB = ()=>{
        this.setState({demo:'tokuo'});
        Actions.PageB();
    }

    render(){
        return (
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
                <TextInput
                    placeholder="Type here"
                />
                <TouchableOpacity onPress={this._changeToPageB.bind(this)}>
                    <Text>Link</Text>
                </TouchableOpacity> 
            </View>
        );
    }
};

export default PageA;