import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import {useQuery} from 'react-query';
import {ImageIcon} from '../../../../components/ImageIcon/ImageIcon';

import {Show} from '../../../../models/ShowModel';
import {QueryKeys} from '../../../../services/QueryKeys';
import {showService} from '../../../../services/show/showService';
import {colors} from '../../../../styles/colors';
import {SeasonModal} from '../SeasonModal/SeasonModal';
import {ShowInfo} from '../ShowInfo/ShowInfo';

const arrowDownIcon = require('../../../../assets/images/arrow-down.png');
type Props = {
  show: Show;
};
export function EpisodeList({show}: Props) {
  const [selectedSeason, setSelectedSeason] = useState('1');
  const modalizeRef = useRef<Modalize>(null);

  const {data} = useQuery([QueryKeys.EPISODE_LIST, show.id], () =>
    showService.getEpisodes(show.id),
  );

  function renderItem({item}) {
    return <Text style={{color: '#FFF', padding: 16}}>{item.name}</Text>;
  }

  function openModal() {
    modalizeRef.current?.open();
  }

  function Header() {
    return (
      <View>
        <ShowInfo show={show} />
        <TouchableOpacity style={styles.seasonContainer} onPress={openModal}>
          <Text style={styles.seasonText}>Season: {selectedSeason}</Text>
          <ImageIcon
            style={{marginLeft: 8}}
            size={16}
            source={arrowDownIcon}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      <FlatList
        contentContainerStyle={{paddingBottom: 16}}
        ListHeaderComponent={Header}
        data={data ? data.seasons[selectedSeason] : []}
        renderItem={renderItem}
      />
      <SeasonModal
        ref={modalizeRef}
        selectedSeason={selectedSeason}
        onSelectSeason={setSelectedSeason}
        seasons={data?.seasonNames || []}
      />
    </>
  );
}

const styles = StyleSheet.create({
  seasonContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seasonText: {
    fontWeight: 'bold',
    color: colors.onBackground,
    fontSize: 20,
  },
});
