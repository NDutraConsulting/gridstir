import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Routes } from '../../_shared/Routes/Routes';
import { styles } from '../../../../brand/styles/style';

export const RewardsRoute: Routes = Routes.RewardsHome;

export function RewardsHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Rewards</Text>
      <Button
        title="Details"
        onPress={() => navigation.push(`${Routes.RewardsDetails}`)}
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}
