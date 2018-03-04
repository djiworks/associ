import React from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default class AssosContactsSegment extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Tel :</Text>
        <Text style={{marginBottom: 10}}>0262 132568</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Adresse :</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus imperdiet convallis.</Text>
      </ScrollView>
    );
  }
}
