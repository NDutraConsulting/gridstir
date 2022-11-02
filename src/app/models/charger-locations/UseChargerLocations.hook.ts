// Author Nikko Dutra Bouck
import {
  getLocation,
  subscribeToLocationService,
} from '../../utils/LocationService/LocationService.functions';

import { useEffect, useState } from 'react';

import {
  refreshData,
  fetchDataWithLocation,
  getCachedData,
} from './ChargerLocationsModel.functions';

class componentInstance {
  static count = 0;
}

export function useChargerLocationsModel(): any[] {
  const [chargerLocationsData, setChargerLocationsData] = useState([]);

  // This subscriptionHandler for location service events.
  //  This allows this component to get updates,
  //      however unsbscribing will require iteration...
  function subscriptionHandler({ location }) {
    console.log(
      `UseChargerLocationHook - subscriptionHandler() - Count: ${componentInstance.count}`
    );

    const radiusInKm = 3;

    fetchDataWithLocation(location.latitude, location.longitude, radiusInKm)
      .then(model => {
        setChargerLocationsData(model);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);

        // Set the locations with the cached data.
        setChargerLocationsData(getCachedData());
      });
  }

  const searchForChargerLocations = (lat, long, radiusInKm) => {
    fetchDataWithLocation(lat, long, radiusInKm).then(model => {
      setChargerLocationsData(model);
    });
  };

  const refreshChargerLocations = (lat, long, radiusInKm) => {
    refreshData(lat, long, radiusInKm).then(model => {
      setChargerLocationsData(model);
    });
  };

  const componentDidMount = () => {
    // I am testing to see if the component that
    //  called this hook is going to get called again.
    // I am not sure if the hook will work across multiple files...
    // NOTE: THIS implementation using an EVENTBUS is PURELY EXPERIMENTAL.

    componentInstance.count++;
    // Initialize the location using the cached data.
    // getCachedData() could use an SQLite db & localization config file.
    setChargerLocationsData(getCachedData());

    subscribeToLocationService(subscriptionHandler);
    getLocation();
  };

  useEffect(componentDidMount, []);

  return [
    chargerLocationsData,
    searchForChargerLocations,
    refreshChargerLocations,
  ];
}
