export interface Show {
  id: string;
  url: string;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
  genres: string[];

  summary: string;
}
