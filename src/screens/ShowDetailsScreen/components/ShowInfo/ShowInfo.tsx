import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {DaysOfWeekIndicator} from '../../../../components/DaysOfWeekIndicator/DaysOfWeekIndicator';
import {colors} from '../../../../styles/colors';
import {commonUtils} from '../../../../utils/commonUtils';
import {Genres} from '../Genres/Genres';

import RenderHtml from 'react-native-render-html';
import {Show} from '../../../../models/ShowModel';

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
      <Image
        source={imageSource}
        resizeMode="cover"
        style={{width: COVER_WIDTH, height: COVER_HEIGHT}}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{show.name}</Text>
        <DaysOfWeekIndicator days={show.schedule.days} />
        <Text style={styles.timeText}>Time: {show.schedule.time}</Text>
        <Genres genres={show.genres} />

        <RenderHtml
          baseStyle={{color: colors.onBackground}}
          contentWidth={200}
          source={{html: show.summary}}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
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
});
