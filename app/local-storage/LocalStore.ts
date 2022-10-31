/**
 *  Auth: Nikko Dutra Bouck
 *  This local Storage class abstracts the persistance of data on a device.
 *
 * You can change the storage engine as needed and
 * implement one of the following from: https://reactnative.directory/?search=storage
 *
 * I would serious consider using SQLite to leverage the power of SQL
 * Ex: use Lat and Long as columns so that we can lookup gps entries with
 * test_expression BETWEEN low_expression AND high_expression
 * SELECT
    station_json_string
  FROM
      invoices
  WHERE
      lat BETWEEN 80.5 and 81 AND long BETWEEN 111.5 and 111.9
  ORDER BY
      lat;
 *
 */
import { LocalStorageInterface } from './LocalStorageInterface';

export class LocalStorage {
  static storageEngine: LocalStorageInterface;
  static storeKeyValue(key: String, value: String) {
    /**
     * Use this function to interact with the local storage standard of your choice.
     */
    console.log(`Saving KEY: ${key} - VALUE: ${value}`);
  }

  static rawQuery(sql: String) {
    //console.log(sql);
    return sql;
  }
}
