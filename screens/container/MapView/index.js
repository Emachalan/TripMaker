import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useIsFocused} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
const {width, height} = Dimensions.get('window');
const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};
const MapScreen = () => {
  const [location, setCurrentLocation] = useState(initialRegion);
  const [multipleLocations, setMultipleLocations] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const data = [];
      data[0] = {
        ...location,
        latitude: info?.coords?.latitude,
        longitude: info?.coords?.longitude,
      };
      data[1] = {...initialRegion, latitude: 11.8330974, longitude: 79.7260967};
      data[1] = {...initialRegion, latitude: 11.8330964, longitude: 79.7260957};
      setMultipleLocations(data);
      setCurrentLocation({
        ...location,
        latitude: info?.coords?.latitude,
        longitude: info?.coords?.longitude,
      });
    });
  }, [isFocused]);

  console.log('location/////', location);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        //  onRegionChange={onRegionChange}
        region={location}
        showsUserLocation
        followsUserLocation
        showsTraffic
        loadingEnabled
        showsIndoorLevelPicker
        initialRegion={initialRegion}>
        {multipleLocations.map((item, index) => (
          <Marker coordinate={item} key={index} />
        ))}
        <Polyline coordinates={[...multipleLocations]} strokeWidth={4} geodesic lineJoin="miter" />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height,
    width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
