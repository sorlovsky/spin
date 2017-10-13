import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants, BarCodeScanner, Permissions, MapView } from 'expo';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
   const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: .5, backgroundColor: 'powderblue'}}>  
          <Text style={styles.bigblue}> Dockless Bike Reviews </Text> 
          </View>
        <View style={{flex: 5, backgroundColor: 'skyblue'}}>
          <Bike name='spin'/>
          <Bike name='limebike'/>
          </View>

       <Button
          onPress={() => navigate('Detail', { user: 'Simon' })}
          title="Detail"
        />
        <Button
          onPress={() => navigate('QR')}
          title="QR Code Reader"/>

        <Button
          onPress={() => navigate('Map')}
          title="Map"/>

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

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class MapScreen extends React.Component {
  state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  static navigationOptions = ({ navigation }) => ({
    title: `Map`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    latlng = {
      latitude: 37.78825,
      longitude:  -122.4324
    }
    return (
      <View>
        <MapView
          style={{ alignSelf: 'stretch', height: 500 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        >
         <MapView.Marker
            coordinate={latlng}
            title={"location"}
            description={"User's location"}
            pinColor="orange"
          />
        </MapView>
      </View>
    );
  }
}

class QRScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `QR Code Reader`,
  });

  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {
    
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
      
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  QR: { screen: QRScreen},
  Map: { screen: MapScreen},
});


export default class App extends React.Component {
  

  render() {
    return <SimpleApp />;
  }
}


