import * as React from 'react';
import { View, Text } from 'react-native';
import { Routes } from '../../_shared/Routes/Routes';
import { styles } from '../../../styles/style';
import ChargerLocationsFlatList from '../components/ChargerLocationsList/ChargerLocationsFlatList.component';

// Register and link this new view for the router
export const TravelRoute: Routes = Routes.TravelHome;

export function TravelHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Travel</Text>
      <ChargerLocationsFlatList navigation={navigation} />
    </View>
  );
}
