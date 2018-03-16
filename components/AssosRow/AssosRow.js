import React, { Component } from 'react';
import { ListItem, Rating, Avatar, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

class AssosRow extends Component {
  renderSubtitle(tags, reviews) {
    return (
      <View style={{ paddingLeft: 10 }}>
        <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center'}} >
              <Rating
                imageSize={15}
                readonly
                startingValue={5}
              />
              <Text style={{marginLeft: 5, fontSize: 10, color: 'gray'}}>({reviews} reviews)</Text>
         </View>
        <View style={{ paddingTop: 5, flexDirection: 'row' }}>
          {
            tags.map((tag) => (
              <Text key={tag.name} style={styles.tagContainer}>#{tag.name}</Text>
            ))
          }
        </View>
      </View>
    );
  }
  render() {
    const { name, tags, avatar, _ratingsMeta } = this.props.assos;
    return (
      <ListItem
        title={name}
        titleStyle={{ fontWeight: 'bold' }}
        subtitle={this.renderSubtitle(tags, _ratingsMeta.count)}
        avatar={
          <Avatar
            large
            source={{uri: avatar}}
          />
        }
        onPress={this.props.onPress}
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
