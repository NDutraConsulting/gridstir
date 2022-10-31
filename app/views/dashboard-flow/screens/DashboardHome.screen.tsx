import * as React from 'react';
import { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Routes } from '../../_shared/Routes/Routes';

export const DashboardHomeRoute: Routes = Routes.DashboardHome;

export function DashboardHome({ navigation }) {
  //Render() is being called
  const stateWasUpdated = () => {
    console.log('State Updated');
  };

  const componentDidMount = () => {
    console.log('componentDidMount()');
  };

  const componentDidUnmount = () => {
    return () => {
      console.log(
        'Behavior right before the component is removed from the DOM.'
      );
    };
  };

  useEffect(stateWasUpdated);

  useEffect(componentDidMount, []);

  useEffect(componentDidUnmount, []);

  return (
    <View>
      <Text>Dashboard</Text>

      <Button
        title="ClickMe"
        onPress={() => navigation.push(`${Routes.DashboardHome}`)}
      />
    </View>
  );
}
