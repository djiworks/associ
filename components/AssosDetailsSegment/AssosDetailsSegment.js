import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native';

class AssosDetailsSegment extends Component {
  render() {
    const { desc, tags } = this.props.assos;
    let strTags = tags.map((tag) => {
      return `#${tag.name}`;
    });
    strTags = strTags.join(', ');
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
          {strTags}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Description :</Text>
        <Text>{desc}</Text>
      </ScrollView>
    );
  }
}

export default AssosDetailsSegment;
