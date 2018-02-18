import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ExploreScreen from './screens/Explore';

class HomeScreen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen2</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

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
    Explore: {screen: ExploreScreen},
    Favorites: {screen: HomeScreen2},
    Notifs: {screen: HomeScreen3},
    Profile: {screen: HomeScreen3},
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = '';
        switch (routeName) {
          case 'Explore':
            icon = 'compass';
            break;
          case 'Favorites':
            icon = 'heart';
            break;
          case 'Notifs':
            icon = 'bell';
            break;
          case 'Profile':
            icon = 'user';
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

