import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import DrawerContent from './DrawerContent';
import { London, Smoke, Sunset } from './TickTockQuoteThemeSwitcher';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Drawer = createDrawerNavigator(
  {
    London: {
      path: '/ttq/london',
      screen: London,
    },
    Smoke: {
      path: '/ttq/smoke',
      screen: Smoke,
    },
    Sunset: {
      path: '/ttq/sunset',
      screen: Sunset,
    },
  },
  {
    initialRouteName: 'London',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: DrawerContent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default Drawer;
