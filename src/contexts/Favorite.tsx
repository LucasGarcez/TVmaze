import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Show} from '../models/ShowModel';

type FavoriteList = {
  [key in string]: Show;
};

const SHOW_LIST_KEY = '@ShowListKey';
interface FavoriteContext {
  showList: Show[];
  addFavorite: (show: Show) => void;
  deleteFavorite: (showId: string) => void;
  isFavorite: (showId: string) => boolean;
}
const FavoriteContext = createContext<FavoriteContext>({
  showList: [],
  isFavorite: () => false,
  deleteFavorite: () => {},
  addFavorite: () => {},
});

export const FavoriteProvider: React.FC = ({children}) => {
  const [favoriteList, setFavoriteList] = useState<FavoriteList>({});
  const [showList, setShowList] = useState<Show[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    updateStorage(favoriteList);
    updateShowList(favoriteList);
  }, [favoriteList]);

  async function loadData() {
    try {
      const stringifiedList = await AsyncStorage.getItem(SHOW_LIST_KEY);
      if (stringifiedList) {
        const list = JSON.parse(stringifiedList);
        setFavoriteList(list);
      }
    } catch (error) {
      //handle error
    }
  }

  async function updateStorage(list: FavoriteList) {
    try {
      const stringifiedList = JSON.stringify(list);
      AsyncStorage.setItem(SHOW_LIST_KEY, stringifiedList);
    } catch (error) {}
    //handle error
  }

  function updateShowList(list: FavoriteList) {
    setShowList(
      Object.values(list).sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      }),
    );
  }
  function addFavorite(show: Show) {
    setFavoriteList(prev => {
      return {
        ...prev,
        [show.id]: show,
      };
    });
  }
  function deleteFavorite(showId: string) {
    if (favoriteList[showId]) {
      const updatedList = {...favoriteList};
      delete updatedList[showId];

      console.log(updatedList);
      setFavoriteList(updatedList);
    }
  }
  function isFavorite(showId: string): boolean {
    return !!favoriteList[showId];
  }

  return (
    <FavoriteContext.Provider
      value={{addFavorite, deleteFavorite, isFavorite, showList}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorite must be used within an FavoriteProvider');
  }
  return context;
}
