// Author Nikko Dutra Bouck
// Contains caching logic and interfaces with local storage
import { useEffect, useState } from 'react';
import { getUser } from './UserModel.functions';

export function useUser() {
  const [userData, setUserData] = useState({});

  const componentDidMount = () => {
    // Fetch the model data
    getUser().then(model => {
      setUserData(model);
    });
  };

  useEffect(componentDidMount, []);

  return [userData, setUserData];
}
