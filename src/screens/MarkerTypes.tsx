import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// @ts-ignore
import flagBlueImg from './assets/flag-blue.png';
// @ts-ignore
import flagPinkImg from './assets/flag-pink.png';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const MarkerTypes = () => {
  const [marker1, setMarker1] = useState(true);
  const [marker2, setMarker2] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          onPress={() => setMarker1(!marker1)}
          coordinate={{
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          }}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}
          image={marker1 ? flagBlueImg : flagPinkImg}>
          <Text style={styles.marker}>X</Text>
        </Marker>
        <Marker
          onPress={() => setMarker2(!marker2)}
          coordinate={{
            latitude: LATITUDE - SPACE,
            longitude: LONGITUDE - SPACE,
          }}
          centerOffset={{x: -42, y: -60}}
          anchor={{x: 0.84, y: 1}}
          image={marker2 ? flagBlueImg : flagPinkImg}
        />
        <Marker
          onPress={() => setMarker2(!marker2)}
          coordinate={{
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          }}
          centerOffset={{x: -42, y: -60}}
          anchor={{x: 0.84, y: 1}}
          opacity={0.6}
          image={marker2 ? flagBlueImg : flagPinkImg}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
});

export default MarkerTypes;
