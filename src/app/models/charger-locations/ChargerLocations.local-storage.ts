/* eslint-disable @typescript-eslint/no-unused-vars */
import { LocalStorage } from '../../local-storage/LocalStore';
import { ChargerStation } from '../public-charger/ChargerStationType';

/********************* LOCAL STORAGE FUNCTIONS *********************/

const sqliteTableName: string = 'ChargerLocations';

/**
 *
 * @param {Object} response
 * @param {number} lat
 * @param {number} long
 */
export function saveGPSLookupToLocalStorage(
  response: Object,
  lat: number | null,
  long: number | null
) {
  // PSUEDO query
  // const query = `INSERT OR REPLACE INTO
  //                 ${sqliteTableName}
  //                 (column_list)
  //                 VALUES(value_list-${response}-${lat}-${long});`;

  LocalStorage.rawQuery('DEMO for saveGPSLookupToLocalStorage.query');
}

export function inLocalStorage(lat: number, long: number) {
  // Check the LocalStorage for the data
  return false;
}

/**
 * getGPSBlock is used when getting data from local storage when zooming out
 *
 * @param {number} lat
 * @param {number} long
 * @returns {}
 */
export function getGPSBlock(lat: number, long: number): [] {
  // This needs to be broken into more fine grain chunks
  // for persistance .1 decimals is about 5 miles

  const latKey = lat.toFixed(0);
  const longKey = long.toFixed(0);

  const query = `SELECT * FROM ${sqliteTableName} WHERE LatLongKey = ${latKey}${longKey};`;
  LocalStorage.rawQuery(query);

  return [];
}

function getGPSGridId(lat: number, long: number) {
  // This needs to be broken into more fine grain chunks
  // for persistance .1 decimals is about 5 miles

  const latKey = lat.toFixed(1);
  const longKey = long.toFixed(1);

  return `${latKey}${longKey}`;
}
