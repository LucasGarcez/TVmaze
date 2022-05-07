import React from 'react';
import {View, ViewProps} from 'react-native';
import {colors} from '../../styles/colors';

export const ScreenTemplate: React.FC<ViewProps> = ({children, ...rest}) => {
  return (
    <View style={[{backgroundColor: colors.background}, rest]}>{children}</View>
  );
};
