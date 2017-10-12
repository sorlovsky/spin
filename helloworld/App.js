import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>  
          <Text style={styles.bigblue}> Dockless Bike Reviews </Text> 
          </View>
        <View style={{flex: 5, backgroundColor: 'skyblue'}}>
          <Bike name='spin'/>
          <Bike name='limebike'/>
          </View>
      </View>
    )
  }
}

class Bike extends Component {

  render() {
   let bikes = {
      spin: {
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Spin_bicycle_in_Seattle%2C_July_2017.jpg/1280px-Spin_bicycle_in_Seattle%2C_July_2017.jpg"
      },
        
      limebike: {
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/LimeBike_in_Seattle%2C_July_2017.jpg/220px-LimeBike_in_Seattle%2C_July_2017.jpg"
      }
   }   

  //  let name = this.props.name
  
    return (
      <View>
        <Text> {this.props.name} </Text>
        <Image source={bikes[this.props.name]} style={{width: 200, height: 100}}/>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
});


export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

