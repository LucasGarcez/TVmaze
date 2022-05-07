import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {shade} from 'polished';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {colors} from '../styles/colors';

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Router() {
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
      <Drawer.Screen name="TVmaze" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
