import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DefaultTextInput} from '../../components/DefaultTextInput/DefaultTextInput';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';
import {ShowList} from '../../components/ShowList/ShowList';
import {useFavorite} from '../../contexts/Favorite';
import {useDebounce} from '../../hooks/useDebounce';
import {Show} from '../../models/ShowModel';
import {SIZE} from '../../utils/constants';

export function FavoriteScreen() {
  const {showList} = useFavorite();

  const [searchText, setSearchText] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const debouncedValue = useDebounce(searchText, 600);

  const [showListSearch, setShowListSearch] = useState<Show[]>([]);

  useEffect(() => {
    setIsSearch(debouncedValue.length > 0);
    setShowListSearch(search(debouncedValue, showList));
  }, [debouncedValue, showList]);

  function search(text: string, list: Show[]): Show[] {
    return list.filter(show =>
      show.name.toLowerCase().includes(text.toLowerCase()),
    );
  }

  return (
    <ScreenTemplate style={{paddingHorizontal: SIZE.padding}}>
      <View style={styles.inputContainer}>
        <DefaultTextInput
          placeholder="Search show by name"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <ShowList data={isSearch ? showListSearch : showList} />
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
});
