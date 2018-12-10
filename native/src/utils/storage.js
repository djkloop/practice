import { AsyncStorage } from 'react-native';

class Storage {
  constructor() {
    this._storage = AsyncStorage;
  }
  getItem(key) {
    return this._storage.getItem(key).then(ret => JSON.parse(ret));
  }
  setItem(key, value) {
    return this._storage.setItem(key, JSON.stringify(value))
  }
  removeItem(key) {
    return this._storage.removeItem(key);
  }
  mergeItem(key, value) {
    return this._storage.mergeItem(key, value);
  }
  clear() {
    return this._storage.clear();
  }
  getAllKeys() {
    return this._storage.getAllKeys();
  }
}

export default new Storage();
