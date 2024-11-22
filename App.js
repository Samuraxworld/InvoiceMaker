import React from 'react';
import {NavigationContainer} from '@react-naigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import invoiceListScreen from './screens/invoiceListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Invoice List" component={invoiceListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;