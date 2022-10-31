import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DashboardHome,
  DashboardHomeRoute,
} from './screens/DashboardHome.screen';

import {
  DashboardCharge,
  DashboardChargeRoute,
} from './screens/DashboardCharge.screen';

const Stack = createNativeStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName={DashboardHomeRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={DashboardHomeRoute} component={DashboardHome} />
      <Stack.Screen name={DashboardChargeRoute} component={DashboardCharge} />
    </Stack.Navigator>
  );
}
