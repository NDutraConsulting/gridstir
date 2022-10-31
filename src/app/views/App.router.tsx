// In App.js in a new project
import '../local-storage/LocalStore';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './dashboard-flow/Dashboard.stack';
import { TravelStack } from './travel-flow/Travel.stack';
import { RewardsStack } from './rewards-flow/Rewards.stack';
import { ProfileStack } from './profile-flow/Profile.stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getLocation } from '../utils/LocationService/LocationService.functional';

import { Routes } from './_shared/Routes/Routes';

console.log('AppROuter Mounted');

function pollLocation() {
  setInterval(() => {
    console.log('Polling can be bad for performance be careful.');
    getLocation();
  }, 10000);
}
try {
  pollLocation();
} catch (error) {}

const Tab = createBottomTabNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={`${Routes.Dashboard}`}
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name={`${Routes.Dashboard}`} component={DashboardStack} />
        <Tab.Screen name={`${Routes.Travel}`} component={TravelStack} />
        <Tab.Screen name={`${Routes.Rewards}`} component={RewardsStack} />
        <Tab.Screen name={`${Routes.Profile}`} component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
