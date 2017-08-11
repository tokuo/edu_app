import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
var t = require('tcomb-form-native');
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import PageA from './pageElements/pageA';
import PageB from './pageElements/pageB';

URL = "http://"

export default class edu_app extends Component {
 constructor(props){
	super(props);
	this.state = {
    mycheck: false
  }
  this.changeText = this.changeText.bind(this);
 }

 changeText = (event)=>{
   this.setState({mycheck:event.target.value});
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
      <Router scenes={scenes}/>
    );
  }
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="PageA" initial component={PageA} title="PageA" />
    <Scene key="PageB" component={PageB} title="PageB" />
  </Scene>
);