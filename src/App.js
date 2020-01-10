import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationService} from './utils/services/NavigationService';
const App = () => (
  <SafeAreaProvider>
    <RootNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </SafeAreaProvider>
);
export default App;
