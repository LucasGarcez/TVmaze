import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {Show} from '../../../models/ShowModel';
import {colors} from '../../../styles/colors';
import {stylesUtils} from '../../../utils/styleUtils';

export function ShowListItem({image, name, rating}: Show) {
  return (
    <View style={stylesUtils.shadow}>
      <View style={styles.container}>
        <Image source={{uri: image.medium}} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.rating}>rating: {rating.average}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    maxHeight: 150,
    borderRadius: 16,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.light,
  },
  rating: {
    color: colors.onBackground,
    fontSize: 16,
    marginTop: 8,
  },
});
