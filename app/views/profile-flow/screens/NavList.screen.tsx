import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles/style';
import { Routes } from '../../_shared/Routes/Routes';

export const NavListRoute: string = Routes.ProfileNavList;

export function NavList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}
