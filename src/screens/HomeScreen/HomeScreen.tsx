import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {useQuery} from 'react-query';
import {DefaultTextInput} from '../../components/DefaultTextInput/DefaultTextInput';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';
import {ShowList} from '../../components/ShowList/ShowList';
import {useDebounce} from '../../hooks/useDebounce';
import {useInfiniteList} from '../../hooks/useInfiniteList';
import {QueryKeys} from '../../services/QueryKeys';
import {showService} from '../../services/show/showService';

export function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const debouncedValue = useDebounce(searchText, 600);
  const [isSearch, setIsSearch] = useState(false);

  const listQuery = useInfiniteList([QueryKeys.SHOW_LIST], showService.list);

  const searchQuery = useQuery(
    [QueryKeys.SHOW_SEARCH, debouncedValue],
    () => showService.searchByName(debouncedValue),
    {
      enabled: debouncedValue.length > 0,
    },
  );

  function onEndReached() {
    if (listQuery.hasNextPage) {
      listQuery.fetchNextPage({cancelRefetch: true});
    }
  }

  useEffect(() => {
    setIsSearch(debouncedValue.length > 0);
  }, [debouncedValue]);

  return (
    <ScreenTemplate>
      <View style={styles.inputContainer}>
        <DefaultTextInput
          placeholder="Search show by name"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <ShowList
        isFetchingNextPage={isSearch ? false : listQuery.isFetchingNextPage}
        onEndReached={isSearch ? undefined : onEndReached}
        onEndReachedThreshold={0.1}
        data={isSearch ? searchQuery.data : listQuery.list}
      />
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
});
