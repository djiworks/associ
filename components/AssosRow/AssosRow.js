import React, { Component } from 'react';
import { ListItem, Avatar, Text, Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

class AssosRow extends Component {
  renderSubtitle(tags, favorites, followers) {
    return (
      <View style={{ paddingLeft: 10 }}>
        <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center'}} >
          <Icon
            type='font-awesome'
            name='heart'
            size={15}
            color='goldenrod'
          />
          <Text style={{marginLeft: 5, marginRight:10, fontSize: 15, color: 'goldenrod'}}>{favorites}</Text>
          <Icon
            type='font-awesome'
            name='users'
            size={12}
            color='goldenrod'
          />
          <Text style={{marginLeft: 5, fontSize: 15, color: 'goldenrod'}}>{followers}</Text>
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
    const { name, tags, avatar, _favoritesMeta, _followsMeta } = this.props.assos;
    return (
      <ListItem
        title={name}
        titleStyle={{ fontWeight: 'bold' }}
        subtitle={this.renderSubtitle(tags, _favoritesMeta.count, _followsMeta.count)}
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
