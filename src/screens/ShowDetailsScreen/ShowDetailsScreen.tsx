import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Image, Text, Dimensions, StyleSheet, View} from 'react-native';
import {useQuery} from 'react-query';
import {DaysOfWeekIndicator} from '../../components/DaysOfWeekIndicator/DaysOfWeekIndicator';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';

import {RootStackParamList} from '../../router/Router';
import {QueryKeys} from '../../services/QueryKeys';
import {showService} from '../../services/show/showService';
import {colors} from '../../styles/colors';
import {commonUtils} from '../../utils/commonUtils';
import {Genres} from './components/Genres/Genres';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const coverOriginalDimensions = {
  width: 210,
  height: 295,
};

const COVER_WIDTH = SCREEN_WIDTH;
const COVER_HEIGHT =
  (COVER_WIDTH * coverOriginalDimensions.height) /
  coverOriginalDimensions.width;

type ScreenProps = DrawerScreenProps<RootStackParamList, 'ShowDetails'>;
export function ShowDetailsScreen({route}: ScreenProps) {
  const {show} = route.params;
  const imageSource = commonUtils.getImageSource(show.image, 'original');

  const {data} = useQuery([QueryKeys.EPISODE_LIST, show.id], () =>
    showService.getEpisodes(show.id),
  );

  return (
    <ScreenTemplate>
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
      </View>
    </ScreenTemplate>
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
