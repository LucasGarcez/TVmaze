import {showMocks} from 'test/mocks/showMocks';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    test('when API return episode list return all season names', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();

      expect(groupedEpisodes.seasonNames.length).toBe(2);
    });
    test('when API return episode list return the episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      const temp1 = groupedEpisodes.seasons[1];
      const temp2 = groupedEpisodes.seasons[2];

      expect(temp1[0]).toEqual(showMocks.episode1);
      expect(temp1[1]).toEqual(showMocks.episode2);

      expect(temp2[0]).toEqual(showMocks.episode22);
      expect(temp2[1]).toEqual(showMocks.episode23);
    });
  });
});
