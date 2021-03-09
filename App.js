/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/nav';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers';
import { Provider } from "react-redux";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import { PersistGate } from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { View, Text, TouchableOpacity } from "react-native";

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistedStore = persistStore(store)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
            <Navigation/>
        </PersistGate>
      </Provider>
    )
  }
};


export default App;
