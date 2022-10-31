import { Vehicle } from '../vehicle/VehicleType';
//import { LocalStorage } from '../../local-storage/LocalStore';
// const sqliteTableName: string = 'garage';

/********************* LOCAL STORAGE FUNCTIONS *********************/
export function validateLocalStorage() {
  // Check the LocalStorage for the data
  return true;
}

/**
 * getGPSBlock is used when getting data from local storage when zooming out
 *
 * @param {number} lat
 * @param {number} long
 * @returns {}
 */
export function getGarage(): Vehicle[] {
  return [
    {
      name: 'Lightning',
      brand: 'Tesla',
      model: 'S',
      connection: {},
    },
    {
      name: 'Crawler',
      brand: 'Rivian',
      model: 'R1T',
      connection: {},
    },
  ];
}

export function saveGarage(response) {
  console.log(response);
}
