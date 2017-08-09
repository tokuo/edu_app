import React from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import PageA from './pageElements/pageA';
import PageB from './pageElements/pageB';
 
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="PageA" initial component={PageA} title="PageA" />
    <Scene key="PageB" component={PageB} title="PageB" />
  </Scene>
);
 
class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}
 
export default App;