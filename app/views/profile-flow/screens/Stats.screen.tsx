import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles/style';
import { Routes } from '../../_shared/Routes/Routes';

export const StatsRoute: string = Routes.Stats;

export function Stats({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
}
