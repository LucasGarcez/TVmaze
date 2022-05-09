import {DaysOfWeek, ImageBySize, Rating} from './CommonModels';

export interface Show {
  id: string;
  url: string;
  name: string;
  image: ImageBySize | null;
  rating?: Rating;
  genres: string[];
  type: string;
  status: string;
  ended: string;
  schedule: {
    days: DaysOfWeek[];
    time: string;
  };
  summary: string;
}
