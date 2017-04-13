import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';



class Home extends React.Component {

  state = {
    username: '',
    password: ''
  };

  _signup(){
    Actions.signup();
  };

  //show jon

  render(){
      return (
        <View>

          <Text style={styles.title}>
          PaintPro Estimator
          </Text>

            <TextInput
              style={styles.nameInput}
              onChangeText={(text) => {
                this.setState({
                  username: text,
                });
              }}
              placeholder='Enter username'
              value={this.state.username}
            />
            <TextInput
              style={styles.nameInput}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              placeholder='Enter password'
              value={this.state.password}
            />

            <TouchableOpacity onPress={this._login}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._signup}>
              <Text style={styles.signupText}>Not a user? Click here to sign up!</Text>
            </TouchableOpacity>

        </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'center'
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    fontSize: 12,
    borderColor: 'black',
    textAlign: 'center',
    margin: 20,
  },
  loginText: {
    marginLeft: 20,
    fontSize: 20,
    opacity: 1,
    textAlign: 'center',
  },
  signupText: {
    marginLeft: 20,
    paddingTop: 12,
    fontSize: 12,
    opacity: 1,
    textAlign: 'center',
  },
});

export default Home;
