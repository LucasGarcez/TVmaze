export interface ImageBySize {
  medium?: string;
  original?: string;
}

export enum DaysOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export interface Rating {
  average?: number;
}

export interface PageData<T> {
  data: T[];
  nextPage: number | null;
}
