import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TravelHome, TravelRoute } from './screens/TravelHome.screen';
import {
  ChargerStation,
  ChargerStationRoute,
} from './screens/ChargerStation.screen';

const Stack = createNativeStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TravelStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={TravelRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={TravelRoute} component={TravelHome} />
      <Stack.Screen name={ChargerStationRoute} component={ChargerStation} />
    </Stack.Navigator>
  );
}
