// Note: This does NOT validate the get response
//       coming from the ChargerLocationsModel fetch call.

// This is just a type reference chart -->
//              these interfaces may slow down dev time due to the low value
//              --And extra overhead in an agile environment.
export type ChargerStation = {
  IsRecentlyVerified: boolean;
  DateLastVerified: string;
  ID: number;
  UUID: string;
  DataProviderID: number;
  DataProvidersReference: string;
  OperatorID: number;
  UsageTypeID: number;
  AddressInfo: {
    ID: number;
    Title: string;
    AddressLine1: string;
    Town: string;
    StateOrProvince: string;
    Postcode: string;
    CountryID: number;
    Latitude: number;
    Longitude: number;
    ContactTelephone1: string;
    AccessComments: string;
    RelatedURL: string;
    DistanceUnit: number;
  };
  Connections: [
    {
      ID: number;
      ConnectionTypeID: number;
      LevelID: number;
      Amps: number;
      Voltage: number;
      PowerKW: number;
      CurrentTypeID: number;
      Quantity: number;
    }
  ];
  StatusTypeID: number;
  DateLastStatusUpdate: string;
  DataQualityLevel: number;
  DateCreated: string;
  SubmissionStatusTypeID: number;
};
