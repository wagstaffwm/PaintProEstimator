import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux'
import Dashboard from './Dashboard'
import firebase from 'firebase'

class Signup extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    }

    this._register = this._register.bind(this)
}
  _register(){
    if (this.state.password === this.state.confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      })
    } else {
      console.log('Passwords do not match');
    }
  }

  render(){
        return(
          <View>

            <Text style={styles.title}>
            Create an account!
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
                placeholder='Email'
                value={this.state.email}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalization='none'
                autoCorrect={false}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
                value={this.state.password}
              />

              <TextInput
                style={styles.textInput}
                placeholder='Confirm password'
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
                value={this.state.confirmPassword}
              />

            <TouchableOpacity onPress={this._register}>
                <Text style={styles.submit}>Sign up</Text>
            </TouchableOpacity>

          </View>
      );
    }
  }

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 24,
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
  submit: {
    marginLeft: 20,
    fontSize: 20,
    opacity: 1,
    textAlign: 'center',
  },
});

export default Signup;
