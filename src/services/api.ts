import axios from 'axios';

export const BASE_URL = 'https://api.tvmaze.com/';

export const api = axios.create({
  baseURL: BASE_URL,
});
