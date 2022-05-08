import {ImageProps} from 'react-native';
import {InfiniteData} from 'react-query';
import {ImageBySize, PageData} from '../models/CommonModels';

const imagePlaceholder = require('../assets/images/image-placeholder.png');

function getImageSource(
  imageBySize?: ImageBySize | null,
  size?: 'medium' | 'original',
): ImageProps['source'] {
  const _size = size || 'medium';

  if (!imageBySize) {
    return imagePlaceholder;
  }

  if (imageBySize?.[_size]) {
    return {uri: imageBySize[_size]};
  }

  return imagePlaceholder;
}

const groupBy = <T>(array: Array<T>, key: keyof T): {[key: string]: T[]} => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue,
    );

    return result;
  }, {});
};

export function getFromInfiniteData<T>(
  infiniteData?: InfiniteData<PageData<T>>,
): T[] {
  if (!infiniteData) return [];
  return infiniteData.pages.reduce((prev, curr) => {
    return [...prev, ...curr.data];
  }, [] as T[]);
}

export const commonUtils = {
  getImageSource,
  groupBy,
  getFromInfiniteData,
};
