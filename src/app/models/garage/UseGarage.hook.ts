// Author Nikko Dutra Bouck
// Contains caching logic and interfaces with local storage
import { useEffect, useState } from 'react';

import { EventRegistry } from '../../events/event-registry/EventRegistry';
import _EventBus from '../../events/_event-bus/_EventBus';

import { fetchData } from './GarageModel.functions';

export function useChargerLocationsModel() {
  const [garageData, setGarageData] = useState({});

  const componentDidMount = () => {
    console.log('componentDidMount()');
    _EventBus.publish(EventRegistry.IsLoading, null);

    // Fetch the model data
    fetchData().then(model => {
      setGarageData(model);
    });
  };

  useEffect(componentDidMount, []);

  return [garageData, setGarageData];
}
