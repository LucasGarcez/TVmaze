import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {DaysOfWeekIndicator} from '../../../../components/DaysOfWeekIndicator/DaysOfWeekIndicator';
import {colors} from '../../../../styles/colors';
import {commonUtils} from '../../../../utils/commonUtils';
import {Genres} from '../Genres/Genres';

import {Show} from '../../../../models/ShowModel';
import {RenderHtml} from '../../../../components/RenderHtml/RenderHtml';
import {FavoriteButton} from '../FavoriteButton/FavoriteButton';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const coverOriginalDimensions = {
  width: 210,
  height: 295,
};

const COVER_WIDTH = SCREEN_WIDTH;
const COVER_HEIGHT =
  (COVER_WIDTH * coverOriginalDimensions.height) /
  coverOriginalDimensions.width;

interface Props {
  show: Show;
}
export function ShowInfo({show}: Props) {
  const imageSource = commonUtils.getImageSource(show.image, 'original');
  return (
    <>
      <Image source={imageSource} resizeMode="cover" style={styles.cover} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{show.name}</Text>
          <FavoriteButton show={show} />
        </View>
        <DaysOfWeekIndicator days={show.schedule.days} />
        <Text style={styles.timeText}>Time: {show.schedule.time}</Text>
        <Genres genres={show.genres} />

        <RenderHtml html={show.summary} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.onBackground,
    marginTop: 12,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cover: {
    width: COVER_WIDTH,
    height: COVER_HEIGHT,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
