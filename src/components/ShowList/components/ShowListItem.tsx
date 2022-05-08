import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Show} from '../../../models/ShowModel';
import {colors} from '../../../styles/colors';

import {CardImage} from '../../CardImage/CardImage';

export function ShowListItem(show: Show) {
  const {rating} = show;
  const navigation = useNavigation();

  function navigateToShowDetails() {
    navigation.navigate('ShowDetails', {show});
  }

  return (
    <CardImage
      onPress={navigateToShowDetails}
      image={show.image}
      title={show.name}>
      <View style={styles.content}>
        {rating?.average && (
          <Text style={styles.rating}>rating: {rating?.average}</Text>
        )}
      </View>
    </CardImage>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 8,
  },
  rating: {
    color: colors.onBackground,
    fontSize: 16,
    marginTop: 8,
  },
});
