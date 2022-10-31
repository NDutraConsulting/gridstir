import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import openMap from 'react-native-open-maps';
import { Routes } from '../../_shared/Routes/Routes';
import { styles } from '../../../../brand/styles/style';
// import { requestLocationPermission } from '../../../utils/permissions';
import { startCharging } from '../../../models/public-charger/StartCharging';

function _goToYosemite() {
  openMap({ latitude: 37.865101, longitude: -119.53833 });
}

export const ChargerStationRoute: string = Routes.ChargerStation;

export function ChargerStation({ route, navigation }) {
  const { station } = route.params;

  const currentPublicCharger = station;

  function chargeMyVehicle() {
    startCharging(currentPublicCharger);
  }

  function componentDidMount() {
    // requestLocationPermission();
  }

  useEffect(componentDidMount, []);

  // Get the Current Public Charger Hook
  return (
    <View style={styles.container}>
      <Text>Charger Station</Text>
      {renderInfo(currentPublicCharger)}

      <Button
        color={'#bdc3c7'}
        onPress={_goToYosemite}
        title="Click To Open Maps"
      />
      <Button title="Start Charging" onPress={chargeMyVehicle} />
      <Button
        title="Back"
        onPress={() => navigation.navigate(`${Routes.TravelHome}`)}
      />
    </View>
  );
}

function renderInfo(currentPublicCharger) {
  if (currentPublicCharger === null) {
    return <Text>No Station Selected</Text>;
  }
  if (
    currentPublicCharger.AddressInfo === null ||
    currentPublicCharger.AddressInfo === undefined
  ) {
    return <Text>No Station Selected</Text>;
  }
  // G  ID: 126472
  // LOG  Title: Norbury Station
  // LOG  AddressLine1: Norbury Avenue
  // LOG  Town: Norbury
  // LOG  StateOrProvince: London
  // LOG  Postcode: SW16 3RW
  // LOG  CountryID: 1
  // LOG  Latitude: 51.411963
  const { Title, AddressLine1, Town, StateOrProvince, Latitude, Longitude } =
    currentPublicCharger.AddressInfo;

  const address = `Address: ${AddressLine1} ${Town}, ${StateOrProvince}`;
  const latLong = `Lat: ${Latitude} - Long: ${Longitude}`;
  return (
    <View>
      <Text>Info</Text>
      <Text>{Title}</Text>
      <Text>{address}</Text>
      <Text>{latLong}</Text>
    </View>
  );
}
