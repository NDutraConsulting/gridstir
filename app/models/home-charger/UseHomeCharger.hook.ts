// Author Nikko Dutra Bouck
// Contains caching logic and interfaces with local storage
import { useEffect, useState } from 'react';

import { EventRegistry } from '../../events/event-registry/EventRegistry';
import _EventBus from '../../events/_event-bus/_EventBus';

import { fetchData } from './HomeChargerModel.functions';

export function useHomeChargerModel() {
  const [garageData, setGarageData] = useState({});

  const componentDidMount = () => {
    console.log('componentDidMount()');
    _EventBus.publish(EventRegistry.IsLoading, null);

    // Fetch the model data
    fetchData().then(model => {
      _EventBus.publish(EventRegistry.FinishedLoading, null);
      setGarageData(model);
    });
  };

  useEffect(componentDidMount, []);

  return [garageData, setGarageData];
}
