import React from 'react';
import { Text, View, Button } from 'react-native';

export default class AssosDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.name : 'Association',
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen2</Text>
        <Button
          title="Go to Details"
          //onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}