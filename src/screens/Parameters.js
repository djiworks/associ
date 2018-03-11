import React from 'react';
import { Linking } from 'react-native';
import { List, ListItem } from 'react-native-elements';
// import { StackNavigator } from 'react-navigation';

import { MAIL, APP_NAME } from '../../config/settings';
import LegalScreen from './Legals';

class ParametersScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Paramètres',
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <ListItem
          title="Contactez-nous"
          leftIcon={{ name: 'question-circle', type: 'font-awesome' }}
          onPress={() =>
            Linking.openURL(`mailto:${MAIL}?subject=[${APP_NAME}] Contact`)
          }
        />
        <ListItem
          title="Signalez un problème"
          leftIcon={{ name: 'warning', type: 'font-awesome' }}
          onPress={() =>
            Linking.openURL(
              `mailto:${MAIL}?subject=[${APP_NAME}] Signalement d'un problème`,
            )
          }
        />
        <ListItem
          title="Conditions d'utilisation"
          leftIcon={{ name: 'legal', type: 'font-awesome' }}
          onPress={() => this.props.navigation.navigate('Legal')}
        />
      </List>
    );
  }
}

export default ParametersScreen;

// export default StackNavigator({
//   ParamsList: {
//     screen: ParametersScreen,
//   },
//   Legal: {
//     screen: LegalScreen,
//   },
// });
