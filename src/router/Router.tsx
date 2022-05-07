import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {shade} from 'polished';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {colors} from '../styles/colors';
import {Show} from '../models/ShowModel';
import {ShowDetailsScreen} from '../screens/ShowDetailsScreen/ShowDetailsScreen';
import {DrawerNavigator} from './DrawerNavigator';

export type RootStackParamList = {
  DrawerNavigator: undefined;
  ShowDetails: {show: Show};
};

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
    </Stack.Navigator>
  );
}
