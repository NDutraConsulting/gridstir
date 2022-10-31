// Author Nikko Dutra Bouck
// Contains caching logic and interfaces with local storage
// -----DO NOT USE----
import { isTestMode } from '../../config';

// LocalStorage --> this would be better as a class with Static methods
import {
  inLocalStorage,
  getGPSBlock,
  saveGPSLookupToLocalStorage,
} from './ChargerLocations.local-storage';

class ChargerLocationsModel {
  // Server URLS
  #testUrl = 'http://localhost:4000/chargers/small-data';
  #productionUrl = 'https://api.openchargemap.io/v3/poi/?';

  // Url Params
  #urlParams = {
    apiKey: '&key=123',
    client: '&client=ocm.app.ionic.8.2.0',
    maxResults: '&maxresults=500',
    formatParams:
      '&verbose=false&output=json&includecomments=true&compact=true',
    defaultBoundingBoxLatLng:
      '&boundingbox=(37.35073347773297,-122.0967142625502),(37.415130624817536,-122.00607058059187)',
  };

  #getUrl: string;

  // Static cache to prevent unnecissary server requests
  static #cachedData: object = {};

  constructor(_testMode: boolean = false) {
    this.#getUrl = `${this.#productionUrl}
                    ${this.#urlParams.apiKey}
                    ${this.#urlParams.client}
                    ${this.#urlParams.maxResults}
                    ${this.#urlParams.formatParams}`;

    if (isTestMode() || _testMode) {
      this.#getUrl = this.#testUrl;
    }
  }

  /**
   * Getter
   * @returns object
   */
  getCachedData(): object {
    return ChargerLocationsModel.#cachedData;
  }

  /**
   *
   * @param lat
   * @param long
   * @param radius
   * @returns
   */
  async fetchDataWithLocation(lat: number, long: number, radius: number = 1) {
    // Check the cache first
    if (Object.keys(this.getCachedData()).length > 0) {
      console.log('Get Station Data from cache');
      return this;
    }

    if (inLocalStorage(lat, long)) {
      // This demonstrates that the functional approach
      //  will require 2 SQL queries which means that it will
      // be less performant than a CLASS based approach that
      // uses static functions and a static cache for the previous lookup.
      ChargerLocationsModel.#cachedData = getGPSBlock(lat, long);
    }

    return await this.refreshData(lat, long, radius);
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
  async refreshData(lat: number, long: number, radius: number = 1) {
    console.log('Get Station Data from server');

    // Set the get Url
    let getURL = this.#getUrl;
    if (lat !== null && long !== null) {
      getURL = `${getURL}${this.#createBoundingBoxParam(lat, long, radius)}`;
    }

    await fetch(getURL)
      .then(response => response.json())
      .then(response => {
        ChargerLocationsModel.#cachedData = response;
        saveGPSLookupToLocalStorage(response, lat, long);
      })
      .catch(_err => {
        console.log('Failed to fetch Rental Logs from server.');
        return { err: 'Server Error please try again later.' };
      });
    return this;
  }

  /**
   *
   * @param lat
   * @param long
   * @param radiusInKm
   * @returns
   */
  #createBoundingBoxParam(lat: number, long: number, radiusInKm: number) {
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
}

export default ChargerLocationsModel;
