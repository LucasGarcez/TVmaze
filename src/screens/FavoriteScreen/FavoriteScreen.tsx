import React from 'react';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';
import {ShowList} from '../../components/ShowList/ShowList';
import {useFavorite} from '../../contexts/Favorite';
import {SIZE} from '../../utils/constants';

export function FavoriteScreen() {
  const {showList} = useFavorite();

  return (
    <ScreenTemplate style={{paddingHorizontal: SIZE.padding}}>
      <ShowList data={showList} />
    </ScreenTemplate>
  );
}
