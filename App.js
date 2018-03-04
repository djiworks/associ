import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Explorer from './screens/Explore';
import Favorites from './screens/Favorites';
import Notifs from './screens/Notifs';

class HomeScreen3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen3</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const MainNavigator = TabNavigator({
    Explorer: {screen: Explorer},
    'Mes Favoris': {screen: Favorites},
    Alertes: {screen: Notifs},
    Paramètres: {screen: HomeScreen3},
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = '';
        switch (routeName) {
          case 'Explorer':
            icon = 'compass';
            break;
          case 'Mes Favoris':
            icon = 'heart';
            break;
          case 'Alertes':
            icon = 'bell';
            break;
          case 'Paramètres':
            icon = 'cog';
            break;
          default:
        }
        return <Icon type="font-awesome" name={icon} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'goldenrod',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  });

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

