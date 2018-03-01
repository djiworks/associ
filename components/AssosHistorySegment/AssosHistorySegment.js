import React from 'react';
import { Text, ListItem } from 'react-native-elements';
import { View, FlatList } from 'react-native';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
]

export default class AssosHistorySegment extends React.Component {
  renderItem({ item, index }) {
    return (
      <ListItem
        title={
          <View>
            <Text>13/02/2016 :</Text>
            <Text>Assemblé Générale</Text>
          </View>
        }
        hideChevron
        leftIcon={{name: item.icon}}
      />
    );
  }
  render() {
    return (
      <View>
        <FlatList
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
