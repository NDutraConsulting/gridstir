import { gpsCoords } from '../../brand/localization/location';

export const latlongMapping = (): gpsCoords => {
  /****
     * READ for precision: http://en.wikipedia.org/wiki/Latitude
     *  Lat Lng mapping degrees to km
     *    varies due to the eliptical shape of the earth
       phi   lat 	      long
        0°	110.574 km	111.320 km
        15°	110.649 km	107.550 km
        30°	110.852 km	96.486 km
        45°	111.132 km	78.847 km
        60°	111.412 km	55.800 km
        75°	111.618 km	28.902 km
        90°	111.694 km	0.000 km
     */
  return { lat: 0, long: 0 };
};
