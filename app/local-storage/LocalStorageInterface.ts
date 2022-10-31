/**
 * Auth: Nikko Dutra Bouck
 * This Local storage interface is for very simple data storage
 * For more complex storage we would want to use an extension to include queries
 */

export interface LocalStorageInterface {
  create(key: String, value: String);
  retrieve(key: String, value: String);
  updated(key: String, value: String);
  delete(key: String, value: String);

  createOrUpdate(key: String, value: String);
}
