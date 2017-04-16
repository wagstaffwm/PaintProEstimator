import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TabBarIOS,
} from 'react-native';

import Projects from './Projects';
import Search from './Search';
import Profile from './Profile';

class Dashboard extends React.Component {

    state = {
      selectedTab: 'Projects'
    }

  render() {

    return (
      <TabBarIOS>
          <TabBarIOS.Item
            title='Projects'
            selected={this.state.selectedTab === 'Projects'}
            onPress ={() => {
              this.setState({
                selectedTab: 'Projects'
              });
            }}>
            <Projects />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='Search'
            selected={this.state.selectedTab === 'Search'}
            onPress ={() => {
              this.setState({
                selectedTab: 'Search'
              });
            }}>
            <Search />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title='Profile'
            selected={this.state.selectedTab === 'Profile'}
            onPress ={() => {
              this.setState({
                selectedTab: 'Profile'
              });
            }}>
            <Profile />
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 24,
    textAlign: 'center'
  }
});


export default Dashboard;
