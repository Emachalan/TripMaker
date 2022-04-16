/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigation} from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './store/store';

const App = () => {
  const navigationRef = useRef(null);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Navigation navigationRef={navigationRef} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
