import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';

import {RootStackParamList} from '../../router/Router';

import {EpisodeList} from './components/EpisodeList/EpisodeList';

type ScreenProps = DrawerScreenProps<RootStackParamList, 'ShowDetails'>;
export function ShowDetailsScreen({route}: ScreenProps) {
  const {show} = route.params;

  return (
    <ScreenTemplate>
      <EpisodeList show={show} />
    </ScreenTemplate>
  );
}
