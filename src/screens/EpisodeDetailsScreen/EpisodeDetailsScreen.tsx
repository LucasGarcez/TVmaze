import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';

import {RootStackParamList} from '../../router/Router';
import {commonUtils} from '../../utils/commonUtils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../styles/colors';
import {RenderHtml} from '../../components/RenderHtml/RenderHtml';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const coverOriginalDimensions = {
  width: 400,
  height: 225,
};

const COVER_WIDTH = SCREEN_WIDTH;
const COVER_HEIGHT =
  (COVER_WIDTH * coverOriginalDimensions.height) /
  coverOriginalDimensions.width;

type ScreenProps = DrawerScreenProps<RootStackParamList, 'EpisodeDetails'>;

export function EpisodeDetailsScreen({route}: ScreenProps) {
  const {episode} = route.params;

  //TODO: tratar quando não houver imagem, não exibir
  const imageSource = commonUtils.getImageSource(episode.image, 'original');

  return (
    <ScreenTemplate>
      <SafeAreaView>
        <Image
          source={imageSource}
          resizeMode="cover"
          style={{width: COVER_WIDTH, height: COVER_HEIGHT}}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.episode}>
          Episode: {episode.number} (Season: {episode.season})
        </Text>
        <Text style={styles.title}>{episode.name}</Text>

        <RenderHtml html={episode.summary} />
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
  episode: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.onBackground,
    marginBottom: 8,
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
