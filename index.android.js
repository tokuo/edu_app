import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
var t = require('tcomb-form-native');
//import styles from './style';
import App from './app.js'

URL = "http://"

export default class edu_app extends Component {
 constructor(props){
	super(props);
	this.state = {
		mycheck: false
	}
 }

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
      <App />
    );
  }
}

AppRegistry.registerComponent('edu_app', () => edu_app);

/* getInitialStateはReact.createClassの際に使う
getInitialState(){
	return {
		getData: []
	};
}
*/