import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, AsyncStorage } from 'react-native';
//var t = require('tcomb-form-native');
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import auth from './pageElements/authorization';
import home from './pageElements/home';
import demo from './pageElements/demo';



export default class edu_app extends Component {
 constructor(props){
	super(props);
	this.state = {
        hasToken: false,
        isLoaded: false
    }
}

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: (token !== null),
                     isLoaded: true })
    });
  }
 
  render() {
      if(!this.state.isLoaded) {
          return (
          <ActivityIndicator />
        )
    } else {
        return (
        <Router>
            <Scene key="root">
                <Scene key="authPage" initial={!this.state.hasToken} component={auth} title="認証" type="reset" />
                <Scene key="homePage" initial={this.state.hasToken} component={home} title="Home" type="reset" />
                <Scene key="demoPage" component={demo} title="Demo" />
            </Scene>
        </Router>
        )
    }}
}