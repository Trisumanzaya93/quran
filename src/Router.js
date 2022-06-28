import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from './view/home'
import DetailSurat from './view/detailSurat.js';

const Router = () => (
  <Stack.Navigator >
        {/* <Stack.Screen name="Chat" component={Chat} /> */}
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="DetailSurat" component={DetailSurat}/>
    
  </Stack.Navigator>
);
export default Router