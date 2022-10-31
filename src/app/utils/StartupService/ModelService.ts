/**
 * Auth: Nikko Dutra Bouck
 *
 *  StartupService is used to load data into the cache
 *    Data may come from the cloud or a local storage layer
 */

import GetLocation from 'react-native-get-location';
import { fetchDataWithLocation } from '../../models/charger-locations/ChargerLocationsModel.functions';

/***** LOAD DATA INTO THE MODEL CACHE AND LOCAL_STORAGE *****/

export function LoadModels() {
  updateModelLocation(eventHandler);

  // Add all models that need to be initialized to this class.
}

/**** DEFINE MODEL INITILIZERS HERE ****/

function eventHandler(location) {
  const radiusInKm = 3;
  fetchDataWithLocation(location.latitude, location.longitude, radiusInKm);
}

let isWaiting = false;
// Use the getLocation to request an update right now.
function updateModelLocation(locationHandler) {
  console.log(isWaiting);
  if (isWaiting) {
    return;
  }
  isWaiting = true;

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      console.log(location);
      locationHandler(location);
      isWaiting = false;
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
      isWaiting = false;
    });
}
