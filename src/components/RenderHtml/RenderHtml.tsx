import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtmlRN from 'react-native-render-html';
import {colors} from '../../styles/colors';
import {SIZE} from '../../utils/constants';

interface Props {
  html: string;
}
export function RenderHtmlComponent({html}: Props) {
  const {width} = useWindowDimensions();
  const CONTENT_WIDTH = width - SIZE.padding * 2;
  return (
    <RenderHtmlRN
      baseStyle={{color: colors.onBackground}}
      contentWidth={CONTENT_WIDTH}
      source={{html}}
    />
  );
}

export const RenderHtml = React.memo(RenderHtmlComponent);
