import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet } from 'react-native'
import { MapView, Constants, Location, Permissions } from 'expo'
import BikeQR from './BikeQR'

export default class Home extends Component {
  state = {
    locationResult: null,
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  };

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
    this._getLocationAsync();
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }


  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   console.log(location)
   this.setState({ locationResult: JSON.stringify(location) });
 };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <BikeQR/>
        <MapView
          style={{ alignSelf: 'stretch', flex: 1}}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          provider={MapView.PROVIDER_GOOGLE}
          onRegionChange={this._handleMapRegionChange}
        >
        <MapView.Marker
          title="Bike" description="campbell" coordinate={{latitude: 37.287167, longitude: -121.949959}}/>
          
        <MapView.Polyline strokeColor="orange" strokeWidth={5} coordinates={[{latitude: 37.287167, longitude: -121.949959}, {latitude: 37.387167, longitude: -121.949959}]}/>

      </MapView>
      </View>
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