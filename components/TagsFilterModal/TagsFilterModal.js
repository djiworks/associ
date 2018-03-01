import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { View, Modal, Button as Btn } from 'react-native';

const TAGS = [
  {
    name: 'sports',
    icon: 'hashtag',
  },
  {
    name: 'auto',
    icon: 'car',
  },
  {
    name: 'social',
    icon: 'handshake-o',
  },
  {
    name: 'sports',
    icon: 'hashtag',
  },
  {
    name: 'auto',
    icon: 'car',
  },
  {
    name: 'social',
    icon: 'handshake-o',
  },
    {
    name: 'sports',
    icon: 'hashtag',
  },
  {
    name: 'auto',
    icon: 'car',
  },
  {
    name: 'social',
    icon: 'handshake-o',
  },
  {
    name: 'sports',
    icon: 'hashtag',
  },
]

export default class TagsFilterModal extends React.Component {
  render() {
    return (
      <Modal
        visible={this.props.modalVisible}
        animationType="fade"
        onRequestClose={this.props.onClose}
      >
        <View style={{flex:1, padding: 25}}>
          <Btn
            title="Tout selectionner" 
          />
          <List containerStyle={{flex: 1}}>
            {
              TAGS.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.name}
                  leftIcon={{name: item.icon, type:'font-awesome'}}
                  rightIcon={{name: 'check', type:'font-awesome', size:15 }}
                />
              ))
            }
          </List>
          <Button
            onPress={this.props.onClose}
            title="Appliquer"
            buttonStyle={{backgroundColor: "goldenrod"}}
          />
        </View>
      </Modal>
    );
  }
}