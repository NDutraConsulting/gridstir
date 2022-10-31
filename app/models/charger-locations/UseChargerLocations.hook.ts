// Author Nikko Dutra Bouck

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
    componentInstance.count++;
    // Initialize the location using the cached data.
    // getCachedData() could use an SQLite db & localization config file.
    setChargerLocationsData(getCachedData());
  };

  useEffect(componentDidMount, []);

  return [
    chargerLocationsData,
    searchForChargerLocations,
    refreshChargerLocations,
  ];
}
