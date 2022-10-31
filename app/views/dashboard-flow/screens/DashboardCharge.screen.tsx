import * as React from 'react';
import { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Routes } from '../../_shared/Routes/Routes';
import { styles } from '../../../styles/style';

export const DashboardChargeRoute: Routes = Routes.DashboardCharge;

export function DashboardCharge({ navigation }) {
  //Render() is being called
  const stateWasUpdated = () => {
    console.log('rendering()');
  };

  const componentDidMount = () => {
    console.log('componentDidMount()');
  };

  const componentDidUnmount = () => {
    return () => {
      console.log('Behavior right before the component is removed from App.');
    };
  };

  useEffect(stateWasUpdated);

  useEffect(componentDidMount, []);

  useEffect(componentDidUnmount, []);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <Button
        title="Boost Charge"
        onPress={() => {
          console.log('Charging at home.');
        }}
      />

      <Button
        title="Schedule"
        onPress={() => {
          console.log('TODO: Navigate to Schedule screen.');
        }}
      />

      <Button
        title="Back"
        onPress={() => {
          navigation.navigate(Routes.DashboardHome);
        }}
      />
    </View>
  );
}
