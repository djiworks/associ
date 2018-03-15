import React from 'react';
import { ListItem , Text, Avatar, Rating } from 'react-native-elements';
import { View } from 'react-native';

export default class AssosRow extends React.Component {
  render() {
    return (
      <ListItem
        key={this.props.id}
        title={this.props.assos.name}
        titleStyle={{fontWeight: 'bold'}}
        onPress={this.props.onPress}
        avatar={
          <Avatar
            large
            source={{uri: this.props.assos.avatar}}
          />
        }
        subtitle={
          <View style={{paddingLeft: 10}}>
            <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center'}} >
              <Rating
                imageSize={15}
                readonly
                startingValue={this.props.assos.rating}
              />
              <Text style={{marginLeft: 5, fontSize: 10, color: 'gray'}}>({this.props.assos.nratings} reviews)</Text>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row'}}>
              {
                this.props.assos.tags.map((tag) => (
                  <Text style={{fontSize: 10, color: 'gray', marginRight: 2, fontStyle: 'italic'}}>#{tag}</Text>
                ))
              }
            </View>
          </View>
        }
      />
    );
  }
}