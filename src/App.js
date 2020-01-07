import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => (
  <SafeAreaProvider>
    <RootNavigator />
  </SafeAreaProvider>
);
export default App;
