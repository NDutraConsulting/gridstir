import * as React from 'react';

import { Button } from 'react-native';

export const NavButton = ({ title, navigation, route }) => {
  return <Button title={title} onPress={() => navigation.push(route)} />;
};
