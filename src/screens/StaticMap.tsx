import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface StaticMapProps {
  provider: string;
}

const StaticMap = () => {
  const [region1, setRegion1] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [region2, setRegion2] = useState({
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  return (
    <>
      {
        <View style={styles.container}>
          <MapView
            provider="google"
            style={styles.container}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            initialRegion={region1}>
            <Marker
              title="Marker 1"
              description="This is a description 1 "
              coordinate={region1}
            />
            <Marker
              title="Marker2"
              pinColor="black"
              description="This is a description 2"
              coordinate={region2}
            />
          </MapView>
        </View>
      }
    </>
  );
};

export default StaticMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: 250,
    height: 250,
  },
});

