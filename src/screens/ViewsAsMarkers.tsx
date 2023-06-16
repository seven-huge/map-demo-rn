import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import PriceMarker from './PriceMarker';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ViewsAsMarkers = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [coordinate, setCoordinate] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
  });

  const [amount, setAmount] = useState(99);

  function increment() {
    setAmount(amount + 1);
  }

  function decrement() {
    setAmount(amount - 1);
  }

  return (
    <View style={styles.container}>
      <MapView provider="google" style={styles.map} initialRegion={region}>
        <Marker coordinate={coordinate}>
          <PriceMarker amount={amount} />
        </Marker>
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => decrement()}
          style={[styles.bubble, styles.button]}>
          <Text style={styles.ammountButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => increment()}
          style={[styles.bubble, styles.button]}>
          <Text style={styles.ammountButton}>+</Text>
        </TouchableOpacity>
      </View>
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
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  ammountButton: {fontSize: 20, fontWeight: 'bold'},
});

export default ViewsAsMarkers;
