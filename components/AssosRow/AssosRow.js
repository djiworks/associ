import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { View, Text } from 'react-native';

class AssosRow extends Component {
  render() {
    const { name, onPress, tags } = this.props.assos;
    return (
      <ListItem
        onPress={() => {
          this.props.navigation.navigate('AssosDetail');
        }}
        title={name}
        titleStyle={{ fontWeight: 'bold' }}
        subtitle={
          <View style={{ paddingLeft: 10 }}>
            <View style={{ paddingTop: 5, flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'gray',
                  marginRight: 2,
                  fontStyle: 'italic',
                }}
              >
                #ok
              </Text>
              {/* {tags.map(tag => {
                return <Text>#{tag}</Text>;
              })} */}
            </View>
          </View>
        }
      />
    );
  }
}

export default AssosRow;
