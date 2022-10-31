import GetLocation from 'react-native-get-location';
import _EventBus from '../../events/_event-bus/_EventBus';
import { EventRegistry } from '../../events/event-registry/EventRegistry';

// This is better than the functional
//    approach because it prevents getLocation() from
//      colliding with an external implementation of getLocation()
//  FP Solution: you can write
//        import {getLocation as lsGetLocation} from 'path_to_here';

export class LocationService {
  #isWaiting = false;

  getLocation() {
    console.log(this.#isWaiting);
    if (this.#isWaiting) {
      return;
    }
    this.#isWaiting = true;

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        this.#isWaiting = false;

        // Publish the location event for other services to consume.
        _EventBus.publish(EventRegistry.LocationUpdated, {
          location: location,
        });
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
        this.#isWaiting = false;
      });
  }
}
