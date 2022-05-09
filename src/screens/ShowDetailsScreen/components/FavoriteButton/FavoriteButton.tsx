import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {ImageIcon} from '../../../../components/ImageIcon/ImageIcon';
import {useFavorite} from '../../../../contexts/Favorite';
import {Show} from '../../../../models/ShowModel';
import {colors} from '../../../../styles/colors';

const heartIcon = require('../../../../assets/images/heart.png');
const heartOutlineIcon = require('../../../../assets/images/heart-outline.png');

interface Props {
  show: Show;
}
export function FavoriteButton({show}: Props) {
  const [favorite, setFavorite] = useState<boolean | undefined>(undefined);
  const {isFavorite, addFavorite, deleteFavorite} = useFavorite();

  useEffect(() => {
    setFavorite(isFavorite(show.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleFavorite() {
    setFavorite(prev => !prev);
    if (favorite) {
      deleteFavorite(show.id);
    } else {
      addFavorite(show);
    }
  }

  if (favorite === undefined) {
    return null;
  }

  return (
    <Pressable onPress={toggleFavorite}>
      <ImageIcon
        color={colors.red}
        size={30}
        source={favorite ? heartIcon : heartOutlineIcon}
      />
    </Pressable>
  );
}
