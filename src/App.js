import React from 'react';

import Home from './components/Home';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS==='ios' ? 64 : 54}}>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='dashboard' component={Dashboard} title='Dashboard'/>
          <Scene key='signup' component={Signup} title='Sign up'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
