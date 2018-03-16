import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Explorer from './screens/Explore';
import Favorites from './screens/Favorites';
import Notifs from './screens/Notifs';
import Parameters from './screens/Parameters';
import { GRAPHQL_API } from './config/settings';

const httpLink = new HttpLink({ uri: GRAPHQL_API });

const logoutLink = onError(({ networkError, graphQLErrors }) => {
  console.log(networkError, '......==..', graphQLErrors);
});

const client = new ApolloClient({
  link: logoutLink.concat(httpLink),
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
      tabBarIcon: ({ tintColor }) => {
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
