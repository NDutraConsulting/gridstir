import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../../brand/styles/style';

export const StatsRoute: string = 'Stats';

// Register the route to ensure it does not already exist.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Stats({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
}
