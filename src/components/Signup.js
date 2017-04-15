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

class Signup extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmpassword: '',
  };

  _register(){
    Actions.dashboard();
  };

  render(){
        return(
          <View>

            <Text style={styles.title}>
            Create a free account!
            </Text>

              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({
                    firstname: text,
                  });
                }}
                placeholder='First name'
                value={this.state.firstname}
              />
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({
                    lastname: text,
                  });
                }}
                placeholder='Last name'
                value={this.state.lastname}
              />
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({
                    username: text,
                  });
                }}
                placeholder='Username (paintpro@pro.com)'
                value={this.state.username}
              />
              <TextInput
                style={styles.textInput}
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
                    password: text,
                  });
                }}
                value={this.state.confirmpassword}
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
