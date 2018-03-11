import React from 'react';

// import { Icon } from 'react-native-elements';
// import { TabNavigator, TabBarBottom } from 'react-navigation';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import Explorer from './screens/Explore';
import Favorites from './screens/Favorites';
import Notifs from './screens/Notifs';
import Parameters from './screens/Parameters';

import DrawerContent from './components/DrawerContent';
import CustomNavBar from './components/CustomNavBar';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" navBar={CustomNavBar}>
        <Scene key="main">
          <Scene
            key="associationList"
            component={Explorer}
            title="Explorer"
            initial
            hideNavBar
          />
          <Scene key="Notifs" component={Notifs} title="Notifs" hideNavBar />
          <Scene
            key="Parameters"
            component={Parameters}
            title="Parametres"
            hideNavBar
          />
          <Scene
            key="favorites"
            component={Favorites}
            title="Favoris"
            hideNavBar
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
