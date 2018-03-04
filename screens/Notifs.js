import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import AssosRow from '../components/AssosRow/AssosRow';

import AssosDetail from './AssosDetail';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
    text: 'AG test ici la suite okok'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    text: 'AG test ici la suite okok'
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
    text: 'AG test ici la suite okok'
  },
]

class NotifsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Alertes',
    }
  };

  constructor(props) {
      super(props);

      this.state = {
        loading: true,
        data: list,
      };

      this.renderFooter = this.renderFooter.bind(this);
      this.renderItem = this.renderItem.bind(this);
    }

  renderFooter() {
    if (!this.state.loading) return null;

    return <ActivityIndicator animating size="large" />;
  }

  renderItem({ item, index }) {
    return (
      <ListItem
        title={
          <View>
            <Text style={{fontWeight: 'bold'}}>Nom Association :</Text>
            <Text>{item.text}</Text>
          </View>
        }
        subtitle="Il y a 5 minutes"
        leftIcon={{name: item.icon}}
        onPress={() => this.props.navigation.navigate('AssosDetail', {name: item.name})}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={this.state.data}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default StackNavigator({
  NotifsList: {
    screen: NotifsScreen,
  },
  AssosDetail: {
    screen: AssosDetail,
  }
});
