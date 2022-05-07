import * as React from 'react';

import {useQuery} from 'react-query';
import {ScreenTemplate} from '../../components/ScreenTemplate/ScreenTemplate';
import {ShowList} from '../../components/ShowList/ShowList';
import {QueryKeys} from '../../services/QueryKeys';
import {showService} from '../../services/show/showService';

export function HomeScreen() {
  const {data, isLoading} = useQuery([QueryKeys.SHOW_LIST], showService.list);

  return (
    <ScreenTemplate>
      <ShowList data={data} isLoading={isLoading} />
    </ScreenTemplate>
  );
}
