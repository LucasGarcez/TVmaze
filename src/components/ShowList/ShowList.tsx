import React from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo, Text} from 'react-native';
import {Show} from '../../models/ShowModel';
import {colors} from '../../styles/colors';
import {LoadingIndicator} from '../LoadingIndicator/LoadingIndicator';
import {ShowListItem} from './components/ShowListItem';

interface ShowListProps {
  data?: Show[];
  // isLoading: boolean;
  onEndReached?: FlatListProps<Show>['onEndReached'];
  onEndReachedThreshold?: FlatListProps<Show>['onEndReachedThreshold'];
  isFetchingNextPage: boolean;
}
export function ShowList({
  data,
  onEndReached,
  onEndReachedThreshold,
  isFetchingNextPage,
}: ShowListProps) {
  function renderItem({item, index}: ListRenderItemInfo<Show>) {
    return <ShowListItem {...item} />;
  }

  return (
    <FlatList
      ListFooterComponent={<LoadingIndicator isLoading={isFetchingNextPage} />}
      contentContainerStyle={{paddingVertical: 16}}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      data={data || []}
      renderItem={renderItem}
    />
  );
}
