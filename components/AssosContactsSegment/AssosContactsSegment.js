import React from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default class AssosContactsSegment extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Tel :</Text>
        <Text style={{marginBottom: 10}}>{this.props.assos.phone}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Adresse :</Text>
        <Text>{this.props.assos.address}</Text>
      </ScrollView>
    );
  }
}
