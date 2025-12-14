// Note: Types and interfaces are not validated at runtime. 
// This does NOT validate the get response properties during end to end testing
// Object properties coming from the ChargerLocationsModel fetch call still need validation.
export type HomeCharger = {
  IsRecentlyVerified: boolean;
  DateLastVerified: string;
  ID: number;
  UUID: string;
  UsageTypeID: number;
  AddressInfo: {
    ID: number;
    Title: string;
    AddressLine1: string;
    Town: string;
    StateOrProvince: string;
    Postcode: string;
    CountryID: number;
    ContactTelephone1: string;
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
};
