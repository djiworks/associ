import React from 'react';
import { Button } from 'react-native-elements';
import { View, Modal, Text } from 'react-native';

export default class TagsFilterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: this.props.modalVisible,
    };
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType="fade"
        onRequestClose={() => this.closeModal()}
      >
        <View>
          <Text>This is content inside of modal component</Text>
          <Button
            onPress={() => this.closeModal()}
            title="Filtrer"
          >
          </Button>
        </View>
      </Modal>
    );
  }
}