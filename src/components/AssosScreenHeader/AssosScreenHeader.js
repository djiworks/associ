import React from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';

export default class AssosScreenHeader extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Icon
          type="font-awesome"
          name="chevron-left"
          size={25}
          color="goldenrod"
          underlayColor="transparent"
          containerStyle={{ flex: 1, alignItems: 'flex-start' }}
          onPress={this.props.onBackPress}
        />
        <Icon
          type="font-awesome"
          name="share-alt"
          size={25}
          color="goldenrod"
          underlayColor="transparent"
          raised
        />
        <Icon
          type="font-awesome"
          name="heart"
          size={25}
          color="firebrick"
          underlayColor="transparent"
          raised
        />
      </View>
    );
  }
}
