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

class Profile extends React.Component {

  render(){
        return(
          <View>

            <Text style={styles.title}>
            Hello Profile
          </Text>

          </View>
      );
    }
  }

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 24,
    textAlign: 'center',
  }
});

export default Profile;
