import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, {MAP_TYPES, MapViewProps, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const DisplayLatLng = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [hugeLatLng, setHugeLatLng] = useState({
    latitude: 10.7871983,
    longitude: 106.6958912,
  });
  const [userLocation, setUserLocation] = useState({
    latitude: 10.7871983,
    longitude: 106.6958912,
  });

  const map: any = useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setUserLocation({latitude: crd.latitude, longitude: crd.longitude});
    });
  }, []);

  function onRegionChange(region: any) {
    setRegion(region);
  }

  function animateRandomCoordinate() {
    map?.current?.animateCamera({center: hugeCoordinate()});
  }

  function animateToCurrentUserLocation() {
    map?.current?.animateCamera({center: userLocation});
  }


  function hugeCoordinate() {
    return {
      latitude: 10.7876091,
      longitude: 106.6947955,
    };
  }


  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        ref={map}
        showsUserLocation
        mapType={MAP_TYPES.STANDARD}
        style={styles.map}
        initialRegion={region}
        onRegionChange={region => onRegionChange(region)}>
        <Marker
          title="Huge"
          description="Lim3 tower here"
          coordinate={hugeLatLng}
        />
      </MapView>
      <View style={[styles.bubble, styles.latlng]}>
        <Text style={styles.centeredText}>
          {region.latitude.toPrecision(7)},{region.longitude.toPrecision(7)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => animateRandomCoordinate()}
          style={[styles.bubble, styles.button]}>
          <Text style={styles.buttonText}>Move to Huge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => animateToCurrentUserLocation()}
          style={[styles.bubble, styles.button]}>
          <Text style={styles.buttonText}>Move to Seven's Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// class DisplayLatLng extends React.Component<any, any> {
//   map: any;
//   constructor(props: any) {
//     super(props);
//     Geolocation.getCurrentPosition(pos => {
//       const crd = pos.coords;
//       this.state.userLocation.latitude = crd.latitude;
//       this.state.userLocation.longitude = crd.longitude;
//     });

//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//       hugeLatLng: {
//         latitude: 10.7871983,
//         longitude: 106.6958912,
//       },
//       userLocation: {
//         latitude: 10.7871983,
//         longitude: 106.6958912,
//       },
//     };
//   }

//   onRegionChange(region: any) {
//     this.setState({region});
//   }

//   jumpRandom() {
//     this.setState({region: this.randomRegion()});
//   }

//   animateRandom() {
//     this.map.animateToRegion(this.randomRegion());
//   }

//   animateRandomCoordinate() {
//     this.map.animateCamera({center: this.hugeCoordinate()});
//   }

//   animateToCurrentUserLocation() {
//     this.map.animateCamera({center: this.state.userLocation});
//   }

//   animateToRandomBearing() {
//     this.map.animateCamera({heading: this.getRandomFloat(-360, 360)});
//   }

//   animateToRandomViewingAngle() {
//     this.map.animateCamera({pitch: this.getRandomFloat(0, 90)});
//   }

//   getRandomFloat(min: any, max: any) {
//     return Math.random() * (max - min) + min;
//   }

//   hugeCoordinate() {
//     return {
//       latitude: 10.7876091,
//       longitude: 106.6947955,
//     };
//   }

//   randomRegion() {
//     return {
//       ...this.state.region,
//       ...this.hugeCoordinate(),
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={this.props.provider}
//           ref={ref => {
//             this.map = ref;
//           }}
//           showsUserLocation
//           mapType={MAP_TYPES.STANDARD}
//           style={styles.map}
//           initialRegion={this.state.region}
//           onRegionChange={region => this.onRegionChange(region)}>
//           <Marker
//             title="Huge"
//             description="Lim3 tower here"
//             coordinate={this.state.hugeLatLng}
//           />
//         </MapView>
//         <View style={[styles.bubble, styles.latlng]}>
//           <Text style={styles.centeredText}>
//             {this.state.region.latitude.toPrecision(7)},
//             {this.state.region.longitude.toPrecision(7)}
//           </Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => this.animateRandomCoordinate()}
//             style={[styles.bubble, styles.button]}>
//             <Text style={styles.buttonText}>Move to Huge</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.animateToCurrentUserLocation()}
//             style={[styles.bubble, styles.button]}>
//             <Text style={styles.buttonText}>Move to Seven's Location</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

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
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
  centeredText: {textAlign: 'center'},
});

export default DisplayLatLng;
