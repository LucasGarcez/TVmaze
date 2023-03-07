import {device, element, by, waitFor} from 'detox';
describe('Favorite', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should favorite a TV show', async () => {
    // 1. Digitar no campo de busca The Big Bang Theory
    await element(by.id('search-input')).replaceText('The Big Bang Theory');
    await element(by.id('search-input')).typeText('\n');

    // 2. Pressionar o cardo do The Big Bang Theory
    await element(by.text('The Big Bang Theory')).atIndex(1).tap();

    // 3. Pressionar o botão de favorito
    await element(by.id('favorite-button')).tap();

    // 4. VERIFICAR se o coração ficou vermelho
    await expect(element(by.id('heart-icon-true'))).toBeVisible();
  });

  it('Should favorite the first bad TV Show (star < 5)', async () => {
    // 1.
    const starRatingBad = by.id('star-rating-bad');

    const list = by.id('show-list');

    await waitFor(element(starRatingBad).atIndex(0))
      .toBeVisible()
      .whileElement(list)
      .scroll(300, 'down', 0.5, 0.5);

    await element(starRatingBad).atIndex(0).tap();

    await element(by.id('favorite-button'))
      .tap()
      .catch(async () => {
        await element(starRatingBad).atIndex(0).tap();
        await element(by.id('favorite-button')).tap();
      });

    await expect(element(by.id('heart-icon-true'))).toBeVisible();
  });
});
