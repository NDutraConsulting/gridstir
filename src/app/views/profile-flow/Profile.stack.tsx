import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavList, NavListRoute } from './screens/NavList.screen';
import { Garage, GarageRoute } from './screens/Garage.screen';
import { Wallet, WalletRoute } from './screens/Wallet.screen';
import { Stats, StatsRoute } from './screens/Stats.screen';

const Stack = createNativeStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={NavListRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavListRoute} component={NavList} />
      <Stack.Screen name={GarageRoute} component={Garage} />
      <Stack.Screen name={WalletRoute} component={Wallet} />
      <Stack.Screen name={StatsRoute} component={Stats} />
    </Stack.Navigator>
  );
}
