import React from 'react';
import { ListItem , Text, Avatar, Rating } from 'react-native-elements';
import { View } from 'react-native';

export default class AssosRow extends React.Component {
  render() {
    return (
      <ListItem
        title={this.props.assos.name}
        titleStyle={{fontWeight: 'bold'}}
        avatar={
          <Avatar
            large
            source={{uri: "http://via.placeholder.com/100x100"}}
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
              <Text style={{marginLeft: 5, fontSize: 10, color: 'gray'}}>(10 reviews)</Text>
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