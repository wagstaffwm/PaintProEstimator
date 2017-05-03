import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import firebase from 'firebase'

class Login extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    email: '',
    password: ''
  }

  this._login = this._login.bind(this)
  this._signup = this._signup.bind(this)
}

  _login() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
      console.log(error.code)
      console.log(error.message)
    })
    Actions.dashboard();
  }

  _signup(){
    Actions.signup();
  };

  render(){
      return (
        <KeyboardAvoidingView>

          <Text style={styles.title}>
          PaintPro Estimator
          </Text>

            <TextInput
              style={styles.textInput}
              autoCapitalization='none'
              autoCorrect={false}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
              onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType = 'next'
              placeholder='Enter email'
              value={this.state.email}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalization='none'
              autoCorrect={false}
              secureTextEntry={true}
              ref={(input) => this.passwordInput = input}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              returnKeyType = 'go'
              placeholder='Enter password'
              value={this.state.password}
            />

            <TouchableOpacity onPress={this._login}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._signup}>
              <Text style={styles.signupText}>Not a user? Click here to sign up!</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
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
  textInput: {
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

export default Login;
