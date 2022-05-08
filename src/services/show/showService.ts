import {PageData} from '../../models/CommonModels';
import {Episode, GroupedEpisodes} from '../../models/EpisodeModel';
import {Show} from '../../models/ShowModel';
import {commonUtils} from '../../utils/commonUtils';
import {api} from '../api';

async function list(page: number): Promise<PageData<Show>> {
  try {
    const {data} = await api.get<Show[]>(`shows?page=${page}`);
    return {
      data,
      nextPage: page + 1,
    };
  } catch (error) {
    return {
      data: [],
      nextPage: null,
    };
  }
}

interface SearchShowResult {
  score: number;
  show: Show;
}
async function searchByName(searchText: string): Promise<Show[]> {
  if (searchByName.length < 1) return [];
  const {data} = await api.get<SearchShowResult[]>(
    `search/shows/?q=${searchText}`,
  );

  const showList = data.map(value => value.show);
  return showList;
}

async function getEpisodes(showId: string): Promise<GroupedEpisodes> {
  const {data} = await api.get<Episode[]>(`shows/${showId}/episodes`);

  const seasons = commonUtils.groupBy(data, 'season');
  const seasonNames = Object.keys(seasons);

  return {seasonNames, seasons};
}

export const showService = {
  list,
  searchByName,
  getEpisodes,
};
