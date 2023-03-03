import {device, element, by} from 'detox';
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
});
