import React from 'react';
import { Linking, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { MAIL, APP_NAME } from '../config/settings';
import LegalScreen from './Legals';

class ParametersScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Paramètres',
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <ListItem
          key='contact'
          title="Nous contacter"
          leftIcon={{name: 'question-circle', type: 'font-awesome'}}
          onPress={() => Linking.openURL(`mailto:${MAIL}?subject=[${APP_NAME}] Contact`)}
        />
        <ListItem
          key='warn'
          title="Signaler un problème"
          leftIcon={{name: 'warning', type: 'font-awesome'}}
          onPress={() => Linking.openURL(`mailto:${MAIL}?subject=[${APP_NAME}] Signalement d'un problème`)}
        />
        <ListItem
          key='cgu'
          title="Conditions d'utilisation"
          leftIcon={{name: 'legal', type: 'font-awesome'}}
          onPress={() => this.props.navigation.navigate('Legal')}
        />
        <ListItem
          key='about'
          title="A propos"
          leftIcon={{name: 'info', type: 'font-awesome'}}
          onPress={() => Alert.alert('A propos', 'v0.1\n Copyright Doney (Mars 2018)')}
        />
      </List>
    );
  }
}

export default StackNavigator({
  ParamsList: {
    screen: ParametersScreen,
  },
  Legal: {
    screen: LegalScreen,
  }
});
