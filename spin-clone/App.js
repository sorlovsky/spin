import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { MapView, Constants, Location, Permissions } from 'expo'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  state = {
    mapRegion: { latitude: 37.2872, longitude: -121.9500, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: deviceH}}
          region={this.state.mapRegion}
          provider={MapView.PROVIDER_GOOGLE}
          onRegionChange={this._handleMapRegionChange}
        >
        
        </MapView>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          
          Profile
    
        </Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  state= {
    selectedTab: 'home'
  };

  render() {
    let pic = {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Spin_bicycle_in_Seattle%2C_July_2017.jpg/1200px-Spin_bicycle_in_Seattle%2C_July_2017.jpg"
    }
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="bicycle" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="bicycle" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
