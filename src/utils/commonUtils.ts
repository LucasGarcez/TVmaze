import {ImageProps} from 'react-native';
import {ImageBySize} from '../models/CommonModels';

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

export const commonUtils = {
  getImageSource,
};
