import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import styles from './style';
var t = require('tcomb-form-native');
import {
    Scene,
    Router,
} from 'react-native-router-flux';


//URL = "http://"

export default class edu_app extends Component {
 constructor(props){
	super(props);
	this.state = {
		mycheck: false
	}
 }
/*getInitialStateはReact.createClassの際に使う
  getInitialState(){
	return {
		getData: []
	};
  }
/*

  /*
  componentDidMount(){
    fetch(URL)
      .then((response) => response.json())
		  .then(() => {
        this.setState(mycheck: true)
    })
		.catch((error) => {
			console.error(error); 
		});
  }
  */
 
  render() {
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
      </View>
    );
  }
}


AppRegistry.registerComponent('edu_app', () => edu_app);