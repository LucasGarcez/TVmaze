import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {shade} from 'polished';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {colors} from '../styles/colors';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.primary,

        headerStyle: {
          backgroundColor: colors.secondary,
        },
        drawerStyle: {backgroundColor: colors.background},
        drawerItemStyle: {
          backgroundColor: shade(0.6, colors.primary),
        },
        drawerLabelStyle: {color: colors.primary},
      }}
      initialRouteName="TVmaze">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
