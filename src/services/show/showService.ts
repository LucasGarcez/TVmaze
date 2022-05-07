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

export const showService = {
  list,
  searchByName,
};
