import { PermissionsAndroid, Platform } from 'react-native';

export async function requestLocationPermission() {
  if (Platform.OS === 'ios') {
    return;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Gridstir Location Permission',
        message:
          'Gridstir needs access to your location ' +
          'so you can find ev chargers near you.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Enable Location Service');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
