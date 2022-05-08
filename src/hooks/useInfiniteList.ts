import {useEffect, useState} from 'react';

import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQueryClient,
} from 'react-query';
import {PageData} from '../models/CommonModels';
import {commonUtils} from '../utils/commonUtils';

export function useInfiniteList<T>(
  key: string | string[],
  callback: (page: number) => Promise<PageData<T>>,
): UseInfiniteQueryResult<PageData<T>> & {list: T[]; resetList: () => void} {
  const [list, setList] = useState<T[]>([]);

  const queryClient = useQueryClient();

  const infiniteResult = useInfiniteQuery(
    key,
    ({pageParam = 1}) => callback(pageParam),

    {
      getNextPageParam: lastPage => lastPage.nextPage,
    },
  );

  useEffect(() => {
    if (infiniteResult.data) {
      const newData = commonUtils.getFromInfiniteData(infiniteResult.data);
      setList(newData);
    }
  }, [infiniteResult.data]);

  async function resetList() {
    await queryClient.resetQueries(key, {exact: true});
    infiniteResult.refetch();
  }

  return {
    ...infiniteResult,
    list,
    resetList,
  };
}
