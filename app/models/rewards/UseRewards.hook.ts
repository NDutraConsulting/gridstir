// Author Nikko Dutra Bouck
// Contains caching logic and interfaces with local storage
import { useEffect, useState } from 'react';
import { getRewards } from './getRewards';
import { getUserId } from '../user/UserModel.functions';

export function useRewards() {
  const [rewardsData, setRewardsData] = useState({});

  const componentDidMount = () => {
    const userId = getUserId();
    // Fetch the model data
    getRewards(userId).then(model => {
      setRewardsData(model);
    });
  };

  useEffect(componentDidMount, []);

  return [rewardsData, setRewardsData];
}
