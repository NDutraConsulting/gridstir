import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { styles } from '../../../../brand/styles/style';

export const WalletRoute: string = 'wallet';

// Register the route to ensure it does not already exist.

export function Wallet({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
