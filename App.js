import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Explorer from './screens/Explore';
import Favorites from './screens/Favorites';
import Notifs from './screens/Notifs';
import Parameters from './screens/Parameters';
import { GRAPHCOOL_API } from './config/settings';

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHCOOL_API,
  }),
  cache: new InMemoryCache(),
});

const MainNavigator = TabNavigator(
  {
    Explorer: { screen: Explorer },
    'Mes Favoris': { screen: Favorites },
    Alertes: { screen: Notifs },
    Paramètres: { screen: Parameters },
  },
  {
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
        return (
          <Icon type="font-awesome" name={icon} size={25} color={tintColor} />
        );
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
  },
);

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MainNavigator />
      </ApolloProvider>
    );
  }
}
