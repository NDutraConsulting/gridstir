import { isTestMode } from '../../config';

import {
  inLocalStorage,
  getGPSBlock,
  saveGPSLookupToLocalStorage,
} from './ChargerLocations.local-storage';

// This static class reduces memory consumption accross all hook calls to
// useChargerLocationsModel() export is needed for unit testing
// Think of this as an in Memory persistance layer (aka: DB).
export class ChargerLocationsCache {
  static data: [];
}

/**
 * @returns string
 */
function makeGetUrl() {
  // Server URLS
  const testGetUrl = 'http://localhost:4000/chargers/small-data/?';
  const productionGetUrl = 'https://api.openchargemap.io/v3/poi/?';

  // Url Params
  const urlParams = {
    apiKey: '&key=123',
    client: '&client=ocm.app.ionic.8.2.0',
    maxResults: '&maxresults=500',
    formatParams:
      '&verbose=false&output=json&includecomments=true&compact=true',
    defaultBoundingBoxLatLng:
      '&boundingbox=(37.35073347773297,-122.0967142625502),(37.415130624817536,-122.00607058059187)',
  };

  let getUrl = `${productionGetUrl}
    ${urlParams.apiKey}
    ${urlParams.client}
    ${urlParams.maxResults}
    ${urlParams.formatParams}`;

  if (isTestMode()) {
    getUrl = testGetUrl;
  }
  return getUrl;
}

/**
 * Getter is exported for PreProd live-backend integration testing with SuperTest
 * @returns object
 */
export function getCachedData() {
  // Use this function to get data out of the persistance layer.
  return ChargerLocationsCache.data;
}

/**
 * Setter is exported for PreProd backend integration testing with SuperTest
 * @returns object
 */
export function _setCachedData(response: []) {
  return (ChargerLocationsCache.data = response);
}

/**
 *
 * @param lat
 * @param long
 * @param radius
 * @returns
 */
export async function fetchDataWithLocation(
  lat: number,
  long: number,
  radius: number = 1
) {
  console.log('fetchDataWithLocation()');

  if (inLocalStorage(lat, long)) {
    // This demonstrates that the functional approach
    //  will require 2 SQL queries which means that it will
    // be less performant than a CLASS based approach that
    // uses static functions and a static cache for the previous lookup.
    _setCachedData(getGPSBlock(lat, long));
    return getCachedData();
  }

  return await refreshData(lat, long, radius);
}

/**
 * Use this function to refresh the chargers cache as needed
 * Default parameters are used to bypass the location lookup
 *
 * @param lat
 * @param long
 * @param radius
 * @returns
 */
export async function refreshData(
  lat: number,
  long: number,
  radius: number = 1
) {
  let getURL = makeGetUrl();

  // Set the get Url
  if (lat !== null && long !== null && !isTestMode()) {
    getURL = `${getURL}${createBoundingBoxParam(lat, long, radius)}`;
  }
  //console.log('Get Station Data from server: ' + getURL);

  await fetch(getURL)
    .then(response => response.json())
    .then(response => {
      _setCachedData(response);
      //console.log('RESPONSE:');
      //console.log(response);
      saveGPSLookupToLocalStorage(response, lat, long);
    })
    .catch(_err => {
      console.log('Failed to fetch ChargerStations from server.');
      return { err: 'Server Error please try again later.' };
    });

  return getCachedData();
}

/**
 *
 * @param lat
 * @param long
 * @param radiusInKm
 * @returns
 */
function createBoundingBoxParam(lat: number, long: number, radiusInKm: number) {
  // Check to see if we want a bounding box
  const radians = (long * Math.PI) / 180;
  const OneLongkm = 1 / (111.32 * Math.cos(radians));
  const OneLatkm = 1 / 110.574;

  const startLat = lat - (OneLatkm * radiusInKm) / 2;
  const startLong = long - (OneLongkm * radiusInKm) / 2;

  const endLat = lat + (OneLatkm * radiusInKm) / 2;
  const endLong = long + (OneLongkm * radiusInKm) / 2;

  return `&boundingbox=(${startLat},${startLong}),(${endLat},${endLong})`;
  /* Example: return '&boundingbox=(37.35073347773297,-122.0967142625502),
   *                    (37.415130624817536,-122.00607058059187)';*/
}
