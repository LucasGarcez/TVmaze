import {device, element, by} from 'detox';
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should select Kirby Buckets', async () => {
    await element(by.text('Kirby Buckets')).tap();
    await expect(element(by.text('Comedy'))).toBeVisible();
  });
});
