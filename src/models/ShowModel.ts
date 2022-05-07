import {DaysOfWeek, ImageBySize} from './CommonModels';

export interface Show {
  id: string;
  url: string;
  name: string;
  image: ImageBySize | null;
  rating?: {
    average?: number;
  };
  genres: string[];
  schedule: {
    days: DaysOfWeek[];
    time: string;
  };
  summary: string;
}
