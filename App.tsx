// For using Expo
import React from 'react';
import AppRouter from './src/app/views/App.router';
import { useEffect } from 'react';
import { LoadModels } from './src/app/utils/StartupService/ModelService';

const App = () => {
  function componentDidMount() {
    LoadModels();
  }

  useEffect(componentDidMount, []);

  return <AppRouter />;
};

export default App;
