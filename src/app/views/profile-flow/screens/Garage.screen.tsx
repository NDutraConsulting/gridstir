import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { styles } from '../../../../brand/styles/style';
import { Routes } from '../../_shared/Routes/Routes';

export const GarageRoute: Routes = Routes.Garage;

// Register the route to ensure it does not already exist.

export function Garage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Garage</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
