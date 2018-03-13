import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native';

class AssosDetailsSegment extends Component {
  render() {
    const { description, tags } = this.props.Association;
    return (
      <ScrollView>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Thèmes :</Text>
        <Text
          style={{
            color: 'gray',
            marginRight: 2,
            fontStyle: 'italic',
            marginBottom: 10,
          }}
        >
          {tags}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Description :</Text>
        <Text>{description}</Text>
      </ScrollView>
    );
  }
}

export default AssosDetailsSegment;
