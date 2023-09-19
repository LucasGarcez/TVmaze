import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Router} from './src/router/Router';
import {FavoriteProvider} from './src/contexts/Favorite';
import {initializeStorage} from 'src/services/storage/storageService';
import {mmkvStorage} from 'src/services/storage/mmkvStorage';

const queryClient = new QueryClient();

initializeStorage(mmkvStorage);

const App = () => {
  return (
    <FavoriteProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </QueryClientProvider>
    </FavoriteProvider>
  );
};

export default App;
