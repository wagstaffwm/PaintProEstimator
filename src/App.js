import React from 'react';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform,
} from 'react-native';

import * as firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyA6mSaCPTpTqFdu896Elfp6-_GbyO3KzlI",
  authDomain: "paint-pro-estimator.firebaseapp.com",
  databaseURL: "https://paint-pro-estimator.firebaseio.com",
  storageBucket: "paint-pro-estimator.appspot.com",
  };

export const firebaseRef = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS==='ios' ? 64 : 54}}>
          <Scene key='login' component={Login} title='Login'/>
          <Scene key='dashboard' component={Dashboard} title='Paint Pro Estimator'/>
          <Scene key='signup' component={Signup} title='Sign up'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
