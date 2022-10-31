// Do not modify this code
// Add events in the EventRegistry.

// It is possible to replace this with a reducerHook and useContext
//  However it is slightly more challenging to enforce an events.registry
//     and following the flow of reducer/context can be a confusing
//        it is also easier to insert loging and
//              extend functionality with an EventBus

import { EventRegistry } from '../event-registry/EventRegistry';

class _EventBus {
  static _eventChannels = {};
  /**
   *
   * @param {EventRegistry.events} eventChannel
   *    --> This is event channel name must be stored in the event registry
   * @param {Object | null} event
   *    --> the event object should contain data or instructions for the event handler
   */
  static publish(eventChannel: EventRegistry, event: object | null) {
    console.log(`Event Published: ${eventChannel}`);
    if (this._eventChannels[eventChannel] === undefined) {
      return;
    }

    for (const subscriberEventHandler of this._eventChannels[eventChannel]) {
      subscriberEventHandler(event);
    }
  }

  static subscribe(eventChannel: EventRegistry, eventHandler) {
    console.log(`Subscribing to ${eventChannel}`);

    if (this._eventChannels[eventChannel] === undefined) {
      this._eventChannels[eventChannel] = [];
    }

    this._eventChannels[eventChannel].push(eventHandler);
  }
}

export default _EventBus;
