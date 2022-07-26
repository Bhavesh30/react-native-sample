/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Appearance} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/index';
import Toast from 'react-native-toast-message';
import AppNavigation from './src/navigation/AppNavigation';

import {Provider as PaperProvider} from 'react-native-paper';

import {TaskRealmContext} from './src/models';

const App = () => {
  const {RealmProvider} = TaskRealmContext;
  React.useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <RealmProvider>
        <Main />
      </RealmProvider>
    </Provider>
  );
};

function Main() {
  return (
    <PaperProvider>
      <AppNavigation />
      <Toast />
    </PaperProvider>
  );
}

export default App;
