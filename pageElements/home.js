import React from 'react';
import {
    AsyncStorage,
    TouchableOpacity,
    Alert,
    ScrollView,
    TextInput,
    View,
    Text
} from 'react-native';
import styles from '../styles/style';
import {
    Actions,
} from 'react-native-router-flux';
import ScrollableTabView, {
    DefaultTabBar, 
} from 'react-native-scrollable-tab-view';



class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            demo: 'tokuo'
        }
        //this.getProtectedQuote = this.getProtectedQuote.bind(this);
    }

    /*
    getProtectedQuote() {
        AsyncStorage.getItem('id_token').then((token) => {
            fetch('http://127.0.0.1/api/v1/verify', {
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
    */
                                                                              
    render(){
        return(
            <ScrollableTabView>
                <ScrollView tabLabel="1">
                    <Text>News</Text>
                    <TextInput/>
                </ScrollView>
                <ScrollView tabLabel="2">
                    <Text>hoge</Text>
                </ScrollView>
                <ScrollView tabLabel="3">
                    <Text>hoge</Text>
                </ScrollView>
            </ScrollableTabView>
        );
    }
}

export default home;