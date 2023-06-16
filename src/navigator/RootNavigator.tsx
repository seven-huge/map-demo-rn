import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StaticMap from "../screens/StaticMap";
import DisplayLatLng from "../screens/DisplayLatLng";
import ViewsAsMarkers from "../screens/ViewsAsMarkers";
import MarkerTypes from "../screens/MarkerTypes";
import Callouts from "../screens/Callouts";
import DraggableMarkers from "../screens/DraggableMarkers";
import HomeScreen from "../HomeScreen";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreenHuge" component={HomeScreen} />
        <Stack.Screen name="StaticMapScreen" component={StaticMap} />
        <Stack.Screen name="DisplayLatLngScreen" component={DisplayLatLng} />
        <Stack.Screen name="ViewsAsMarkersScreen" component={ViewsAsMarkers} />
        <Stack.Screen name="MarkerTypesScreen" component={MarkerTypes} />
        <Stack.Screen name="CalloutsScreen" component={Callouts} />
        <Stack.Screen
          name="DraggableMarkersScreen"
          component={DraggableMarkers}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
