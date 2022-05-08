import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../styles/colors';

interface LoadingIndicatorProps {
  isLoading?: boolean;
}
export function LoadingIndicator({isLoading = true}: LoadingIndicatorProps) {
  if (isLoading) {
    return <ActivityIndicator color={colors.primary} size={'large'} />;
  }

  return null;
}
