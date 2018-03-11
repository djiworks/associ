import React from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default class AssosDetailsSegment extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Thèmes :</Text>
        <Text style={{color: 'gray', marginRight: 2, fontStyle: 'italic', marginBottom: 10}}>#test, #test</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Description :</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus imperdiet convallis. Nullam pharetra, diam ut finibus vestibulum, diam velit tempor quam, eget ultricies augue purus vel quam. Integer pulvinar pharetra luctus. Vestibulum lobortis condimentum pharetra. Duis vitae bibendum nisi. Quisque ullamcorper ultrices pharetra. Morbi eget eros odio.</Text>
      </ScrollView>
    );
  }
}