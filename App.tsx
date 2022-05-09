import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Router} from './src/router/Router';
import {FavoriteProvider} from './src/contexts/Favorite';

const queryClient = new QueryClient();

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
