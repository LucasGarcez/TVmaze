import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Show} from '../../../models/ShowModel';
import {colors} from '../../../styles/colors';

import {CardImage} from '../../CardImage/CardImage';
import {StarRating} from '../../StarRating/StarRating';

export function ShowListItem(show: Show) {
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
        <StarRating rating={show.rating} />
        <Text style={styles.typeText}>Type: {show.type}</Text>
        <Text style={styles.statusText}>
          <Text>Status: {show.status}</Text>
          {show.ended && <Text> ({show.ended})</Text>}
        </Text>
      </View>
    </CardImage>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 8,
  },
  typeText: {
    fontSize: 16,
    color: colors.onBackground,
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    color: colors.light,
  },
});
