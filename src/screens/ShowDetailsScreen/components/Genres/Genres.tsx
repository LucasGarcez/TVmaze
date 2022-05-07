import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../styles/colors';

interface Props {
  genres: string[];
}
export function Genres({genres}: Props) {
  const list = genres.reduce((prev, curr, index) => {
    const finalText = index === genres.length - 1 ? '' : ', ';
    return `${prev}${curr}${finalText}`;
  }, '');

  return (
    <View style={styles.container}>
      <Text style={styles.gender}>{list}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  gender: {fontSize: 20, color: colors.onBackground, marginTop: 8},
});
