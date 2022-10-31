import * as React from 'react';
import { View, Text } from 'react-native';
import { Routes } from '../../_shared/Routes/Routes';
import { styles } from '../../../../brand/styles/style';

export const DetailsRoute: Routes = Routes.RewardsDetails;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>huaisd uh asiopd asdpo qw9e asdh ijpas i9hqew ais9dh aisdn</Text>
    </View>
  );
}
