import React from 'react';
import {FlatList, Image, ListRenderItemInfo, Text, View} from 'react-native';
import {Show} from '../../models/ShowModel';
import {ShowListItem} from './components/ShowListItem';

interface ShowListProps {
  data?: Show[];
  isLoading: boolean;
}
export function ShowList({data, isLoading}: ShowListProps) {
  function renderItem({item}: ListRenderItemInfo<Show>) {
    return <ShowListItem {...item} />;
  }

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data || []}
      renderItem={renderItem}
    />
  );
}
