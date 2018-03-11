import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { View, Modal, Button as Btn } from 'react-native';

// import { API_URL } from '../../config/settings';

export default class TagsFilterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      checked: {},
      selectAll: false,
      selectTitle: 'Tout sélectionner',
    };

    this.handlePressTag = this.handlePressTag.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  makeRemoteRequest() {
    // return fetch(`${API_URL}/tags`)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({
    //       data: responseJson,
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  componentDidMount() {
    // this.makeRemoteRequest();
  }

  handlePressTag(name) {
    const checked = this.state.checked;
    checked[name] ? delete checked[name] : (checked[name] = 'green');
    this.setState({ checked });
  }

  handleSelectAll() {
    const checked = {};
    this.state.data.map(item => {
      this.state.selectAll
        ? (checked[item.name] = 'green')
        : delete checked[item.name];
    });
    this.setState({
      checked,
      selectAll: !this.state.selectAll,
      selectTitle: this.state.selectAll
        ? 'Tout déselectionner'
        : 'Tout selectionner',
    });
  }

  render() {
    return (
      <Modal
        visible={this.props.modalVisible}
        animationType="fade"
        onRequestClose={this.props.onClose}
      >
        <View style={{ flex: 1, padding: 25 }}>
          <Btn title={this.state.selectTitle} onPress={this.handleSelectAll} />
          <List containerStyle={{ flex: 1 }}>
            {this.state.data.map(item => (
              <ListItem
                keyExtractor={item => item.name}
                title={item.name}
                leftIcon={{
                  name: item.icon,
                  type: 'font-awesome',
                  color: 'goldenrod',
                }}
                rightIcon={{
                  name: 'check',
                  type: 'font-awesome',
                  size: 15,
                  color: this.state.checked[item.name],
                }}
                onPress={() => {
                  this.handlePressTag(item.name);
                }}
              />
            ))}
          </List>
          <Button
            onPress={() => {
              this.props.onFilter(this.state.checked);
              this.props.onClose();
            }}
            title="Appliquer"
            buttonStyle={{ backgroundColor: 'goldenrod' }}
          />
        </View>
      </Modal>
    );
  }
}
