import React from 'react';
import RootNavigator from './navigator/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableLatestRenderer} from 'react-native-maps';

function App(): JSX.Element {
  enableLatestRenderer();
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
