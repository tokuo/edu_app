import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, AsyncStorage } from 'react-native';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import auth1 from './pageElements/auth_signin';
import auth2 from './pageElements/auth_signup';
import home from './pageElements/home';
import set from './pageElements/setting';



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
                <Scene key="authPage1" initial={!this.state.hasToken} component={auth1} title="sign in" type="reset" />
                <Scene key='authPage2' component={auth2} title='sign up' type="reset" />
                <Scene key="homePage" initial={this.state.hasToken} component={home} title="Home" type="reset" onRight={() => Actions.setPage()}  rightTitle="設定"/>
                <Scene key="setPage" component={set} title="設定" />
            </Scene>
        </Router>
        )
    }}
}