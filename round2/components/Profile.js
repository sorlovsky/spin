import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import GmapsDirections from './Gmaps'

import { StackNavigator } from 'react-navigation';
import BikeQR from './BikeQR'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Tasks',
    headerRight: <Button title="Info" />
  };
  render() {
    return (
        <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'High Priority', data: ['Fix Bike 1'], key: "D"},
            {title: 'Low Priority', data: ['Move Bike 1 to Golden Gate', 'Move Bike 3 up hill'], key: 'J'},
          ]}
          renderItem={({item}) => <Text key={item.key} style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
        <BikeQR/>
      </View>
    )
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class Profile extends React.Component {
  render() {
    return <App/>;
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   paddingBottom: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})