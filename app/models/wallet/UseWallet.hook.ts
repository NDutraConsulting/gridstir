// Author Nikko Dutra Bouck
// Contains caching logic and interfaces with local storage
import { useEffect, useState } from 'react';
import { getWallet } from './getWallet';
import { getUserId } from '../user/UserModel.functions';

export function useWallet() {
  const [walletData, setWalletData] = useState({});

  const componentDidMount = () => {
    const userId = getUserId();

    // Fetch the model data
    getWallet(userId).then(model => {
      setWalletData(model);
    });
  };

  useEffect(componentDidMount, []);

  return [walletData, setWalletData];
}
