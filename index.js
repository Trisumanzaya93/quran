/**
 * @format
 */

import React from 'react';
import {AppRegistry, Text, View,ActivityIndicator} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import {store, persistor} from './src/redux/store';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const appQuran = () => (
    <Provider store={store}>
    <PersistGate
      loading={
        <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#D3D3D3"}}>
          <Text style={{fontSize:40,fontWeight:"bold"}}>welcome to</Text>
          <Text style={{fontSize:40,fontWeight:"bold"}}>My Quran</Text>
          <ActivityIndicator style={{marginTop:40}} size="large" color="#000"/>
        </View>
      }
      persistor={persistor}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => appQuran);
