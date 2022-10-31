import { isTestMode } from '../../config';

import {
  validateLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from './home-charger.local-storage';
import { HomeCharger } from './HomeChargerType';

// This static class reduces memory consumption accross all hook calls to
// useChargerLocationsModel() export is needed for unit testing
export class HomeChargerCache {
  static data: {};
}

/**
 * @returns string
 */
function makeGetUrl() {
  // Server URLS
  const testGetUrl = 'http://localhost:4000/home-charger/';
  const productionGetUrl = 'n/a';

  // Url Params
  const urlParams = {
    apiKey: '&key=123',
    customerId: '&client=ocm.app.ionic.8.2.0',
  };

  let getUrl = `${productionGetUrl}
    ${urlParams.apiKey}
    ${urlParams.customerId}`;

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
  return HomeChargerCache.data;
}

/**
 * Setter is exported for PreProd backend integration testing with SuperTest
 * @returns object
 */
export function _setCachedData(response: HomeCharger[]) {
  return (HomeChargerCache.data = response);
}

/**
 *
 * @param lat
 * @param long
 * @param radius
 * @returns
 */
export async function fetchData() {
  // Check the cache first
  if (getCachedData() !== undefined) {
    console.log('Get Garage Data from cache');
    return getCachedData();
  }

  if (validateLocalStorage()) {
    // This demonstrates that the functional approach
    //  will require 2 SQL queries which means that it will
    // be less performant than a CLASS based approach that
    // uses static functions and a static cache for the previous lookup.
    _setCachedData(getFromLocalStorage());
    return getCachedData();
  }

  return await refreshData();
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
export async function refreshData() {
  let getURL = makeGetUrl();

  await fetch(getURL)
    .then(response => response.json())
    .then(response => {
      _setCachedData(response);
      console.log('RESPONSE:');
      console.log(response);
      saveToLocalStorage(response);
    })
    .catch(_err => {
      console.log('Failed to fetch Garage from server.');
      return { err: 'Server Error please try again later.' };
    });

  return getCachedData();
}
