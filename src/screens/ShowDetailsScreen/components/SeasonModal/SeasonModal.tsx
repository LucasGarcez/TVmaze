import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {colors} from '../../../../styles/colors';

interface Props {
  seasons: string[];
  onSelectSeason: (season: string) => void;
  selectedSeason: string;
}

export const SeasonModal = React.forwardRef<Modalize, Props>(
  ({seasons, onSelectSeason}, ref) => {
    function handleSelect(value: string) {
      onSelectSeason(value);
      ref?.current?.close();
    }

    return (
      <Modalize
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        modalHeight={500}
        modalStyle={styles.container}
        ref={ref}>
        <View style={styles.container}>
          {seasons.map(season => (
            <Text
              key={season}
              onPress={() => handleSelect(season)}
              style={styles.season}>
              Season {season}
            </Text>
          ))}
        </View>
      </Modalize>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
    alignItems: 'center',
  },
  season: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
