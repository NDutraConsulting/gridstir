import { HomeCharger } from './HomeChargerType';
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
export function getFromLocalStorage(): HomeCharger[] {
  return [
    {
      IsRecentlyVerified: true,
      DateLastVerified: '2022',
      ID: 1,
      UUID: '17298037-8172937',
      UsageTypeID: 1,
      AddressInfo: {
        ID: 2,
        Title: 'Gridstir',
        AddressLine1: '7770 LRG Ave',
        Town: 'Eureka',
        StateOrProvince: 'CA',
        Postcode: '98333',
        CountryID: 1,
        ContactTelephone1: '2005550001',
        RelatedURL: '192.168.40.42',
        DistanceUnit: 0,
      },
      Connections: [
        {
          ID: 2,
          ConnectionTypeID: 34,
          LevelID: 11,
          Amps: 32,
          Voltage: 220,
          PowerKW: 7040,
          CurrentTypeID: 3,
          Quantity: 5,
        },
      ],
      StatusTypeID: 1,
      DateLastStatusUpdate: '2022',
      DataQualityLevel: 4,
      DateCreated: '2021',
    },
  ];
}

export function saveToLocalStorage(response) {
  console.log(response);
}
