import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MapView, Constants } from 'expo'

import { Card } from 'react-native-elements';
import GmapsDirections from './Gmaps.js'

import getDirections from 'react-native-google-maps-directions'

export default class Home extends Component {
  state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    markers: [{key: 1, score: 5, coordinate: {"latitude": 37.8199, "longitude": -122.4783}},
    {key: 2, score: 5, coordinate: {"latitude": 37.8059, "longitude": -122.4230}},
    {key: 3, score: 3, coordinate: {"latitude": 37.7694, "longitude": -122.4862}},
    {key: 4, score: 1, coordinate: {"latitude": 37.7941, "longitude": -122.4078}}]
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
       <MapView
          style={{ alignSelf: 'stretch', flex: 1 }}
          region={this.state.mapRegion}
          provider={MapView.PROVIDER_GOOGLE}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          onRegionChange={this._handleMapRegionChange}
        > 
        {this.state.markers.map(marker => {
        return (
            <Bike key={marker.key}
            coordinate={marker.coordinate}
            title={"Bike ID: " + marker.key.toString()}
            />
        );
        })}
        </MapView>
      </View>
    )
  }
}

class Bike extends Component {

    handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }

    getDirections(data)
  }

    render() {
        const { coordinate, title } = this.props;

        return (
            <MapView.Marker coordinate={coordinate}>

                <MapView.Callout onPress={this.handleGetDirections}>
                    <View>
                        <Text>{ title }</Text>
                        <GmapsDirections/>
                        {/*<Button title="Directions" />*/}
                        {/*<Image styleName="medium-wide"
                               source={{uri: this.photo}} />
                        <View styleName="content">
                            <Subtitle>{venue.name}</Subtitle>
                            <Caption>{tips ? tips[0].text : ''}</Caption>
                        </View>*/}
                        </View>
                </MapView.Callout>
            </MapView.Marker>
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

