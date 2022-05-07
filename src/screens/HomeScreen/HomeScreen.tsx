import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {useQuery} from 'react-query';
import {DefaultTextInput} from '../../components/DefaultTextInput/DefaultTextInput';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';
import {ShowList} from '../../components/ShowList/ShowList';
import {useDebounce} from '../../hooks/useDebounce';
import {Show} from '../../models/ShowModel';
import {QueryKeys} from '../../services/QueryKeys';
import {showService} from '../../services/show/showService';

export function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const debouncedValue = useDebounce(searchText);

  const listQuery = useQuery([QueryKeys.SHOW_LIST], showService.list);

  const searchQuery = useQuery(
    [QueryKeys.SHOW_SEARCH, debouncedValue],
    () => showService.searchByName(debouncedValue),
    {
      enabled: debouncedValue.length > 0,
      //onSuccess:
    },
  );

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
        data={debouncedValue.length > 0 ? searchQuery.data : listQuery.data}
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
