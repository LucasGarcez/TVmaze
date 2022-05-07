import * as React from 'react';
import {Button, View} from 'react-native';
import {useQuery} from 'react-query';
import {QueryKeys} from '../../services/QueryKeys';
import {showService} from '../../services/show/showService';

export function HomeScreen({navigation}) {
  const {} = useQuery([QueryKeys.SHOW_LIST], () => showService.list());

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
