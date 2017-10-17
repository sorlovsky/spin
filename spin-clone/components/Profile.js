import React, { Component } from 'react'
import { View, Text, ListView, ActivityIndicator } from 'react-native'

export default class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      }
  }

  componentDidMount() {
    return fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({isLoading: false, dataSource: ds.cloneWithRows(responseJson.movies),
      }, function() {

      });
    })
    .catch((error) => {
      console.error(error);
    })
    // };
  }

  render() {
    return (
      <View>
        <Text>
          Hello World
        </Text>
        <Text>
          yo bro
          </Text>
      </View>
    )
  }
}