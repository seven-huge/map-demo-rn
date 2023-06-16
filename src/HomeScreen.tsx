import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "./components/Button";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToStaticMapSreen = () => {
    // @ts-ignore
    navigation.navigate("StaticMapScreen");
  };

  const goDisplayLatLngScreen = () => {
    // @ts-ignore
    navigation.navigate("DisplayLatLngScreen");
  };

  const goToViewsAsMarkersScreen = () => {
    // @ts-ignore
    navigation.navigate("ViewsAsMarkersScreen");
  };

  const goToMarkerTypesScreen = () => {
    // @ts-ignore
    navigation.navigate("MarkerTypesScreen");
  };

  const goToCalloutsScreen = () => {
    // @ts-ignore
    navigation.navigate("CalloutsScreen");
  };

  const goToDraggableMarkersScreen = () => {
    // @ts-ignore
    navigation.navigate("DraggableMarkersScreen");
  };

  return (
    <View style={styles.container}>
      <Button onPress={goToStaticMapSreen} title={"Load the map"} />
      <Button onPress={goDisplayLatLngScreen} title={"Move Map"} />
      <Button onPress={goToViewsAsMarkersScreen} title={"Customer Marker"} />
      <Button onPress={goToMarkerTypesScreen} title={"Change marker icon"} />
      <Button onPress={goToCalloutsScreen} title={"Custom Infowindow"} />
      <Button
        onPress={goToDraggableMarkersScreen}
        title={"Draggable Markers"}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollview: {
    alignItems: "center",
    paddingVertical: 40,
  },
  button: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "rgba(220,220,220,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  back: {
    position: "absolute",
    top: 20,
    left: 12,
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 12,
    borderRadius: 20,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: { fontWeight: "bold", fontSize: 30 },
  googleSwitch: { marginBottom: 10 },
});
