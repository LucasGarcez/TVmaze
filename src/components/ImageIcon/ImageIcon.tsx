import React from 'react';
import {Image, ImageSourcePropType, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  color: string;
  source: ImageSourcePropType;
  size?: number;
}
export function ImageIcon({color, source, size = 20, ...rest}: Props) {
  return (
    <View {...rest}>
      <Image
        source={source}
        style={{tintColor: color, width: size, height: size}}
        resizeMode="contain"
      />
    </View>
  );
}
