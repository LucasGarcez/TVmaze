import {Show} from '../../models/ShowModel';
import {api} from '../api';

async function list(search?: string): Promise<Show[]> {
  const {data} = await api.get<Show[]>('shows');
  return data;
}

export const showService = {
  list,
};
