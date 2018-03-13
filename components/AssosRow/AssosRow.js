import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

class AssosRow extends Component {
  renderSubtitle() {
    return (
      <View style={{ paddingLeft: 10 }}>
        <View style={{ paddingTop: 5, flexDirection: 'row' }}>
          <Text style={styles.tagContainer}>#ok</Text>
          {/* {tags.map(tag => {
                return <Text>#{tag}</Text>;
              })} */}
        </View>
      </View>
    );
  }
  render() {
    const { name, tags, id } = this.props.assos;
    return (
      <ListItem
        onPress={() => {
          this.props.navigation.navigate('AssosDetail', { id });
        }}
        title={name}
        titleStyle={{ fontWeight: 'bold' }}
        subtitle={this.renderSubtitle()}
      />
    );
  }
}

const styles = StyleSheet.create({
  tagContainer: {
    fontSize: 10,
    color: 'gray',
    marginRight: 2,
    fontStyle: 'italic',
  },
});

export default AssosRow;
