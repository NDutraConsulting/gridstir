import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details, DetailsRoute } from './screens/Details.screen';
import { RewardsHome, RewardsRoute } from './screens/RewardsHome.screen';

const Stack = createNativeStackNavigator();

export function RewardsStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={RewardsRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RewardsRoute} component={RewardsHome} />
      <Stack.Screen name={DetailsRoute} component={Details} />
    </Stack.Navigator>
  );
}
