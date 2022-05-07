import {Episode} from '../../models/EpisodeModel';
import {Show} from '../../models/ShowModel';
import {api} from '../api';

async function list(): Promise<Show[]> {
  const {data} = await api.get<Show[]>('shows');
  return data;
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

async function getEpisodes(showId: string): Promise<Episode[]> {
  const {data} = await api.get<Episode[]>(`shows/${showId}/episodes`);
  return data;
}

export const showService = {
  list,
  searchByName,
  getEpisodes,
};
