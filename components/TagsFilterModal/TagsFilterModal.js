import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { View, Modal, Button as Btn, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TagsFilterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: {},
      selectAll: false,
      selectTitle: 'Tout selectionner',
    };

    this.handlePressTag = this.handlePressTag.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  handlePressTag(name) {
    const checked = this.state.checked;
    checked[name] ? (delete checked[name]) : (checked[name] = 'green');
    this.setState({ checked });
  }

  handleSelectAll() {
    const checked = {};
    this.props.allTags.map((item) => {
      this.state.selectAll ? (checked[item.name] = 'green') : (delete checked[item.name]);
    });
    this.setState({
      checked,
      selectAll: !this.state.selectAll,
      selectTitle: this.state.selectAll ? 'Tout déselectionner' : 'Tout selectionner',
    });
  }

  render() {
    const { allTags, loading } = this.props;
    let content;
    if (loading) {
      content = (
        <View style={{ flex: 1, paddingTop: 15, alignItems: 'center' }}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    } else {
      content = (
        <View style={{flex:1, padding: 25}}>
          <Btn
            title={this.state.selectTitle}
            onPress={this.handleSelectAll}
          />
          <List containerStyle={{flex: 1}}>
            {
              allTags.map((item) => (
                <ListItem
                  key={item => item.id}
                  title={item.name}
                  leftIcon={{name: item.icon, type:'font-awesome', color: 'goldenrod'}}
                  rightIcon={{name: 'check', type:'font-awesome', size:15, color: this.state.checked[item.name] }}
                  onPress={() => {this.handlePressTag(item.name);}}
                />
              ))
            }
          </List>
          <Button
            onPress={() => { this.props.onFilter(this.state.checked); this.props.onClose()}}
            title="Appliquer"
            buttonStyle={{backgroundColor: "goldenrod"}}
          />
        </View>
      );
    }
    return (
      <Modal
        visible={this.props.modalVisible}
        animationType="fade"
        onRequestClose={this.props.onClose}
      >
        { content } 
      </Modal>
    );
  }
}

const tagsQuery = gql`
  {
    allTags {
      id
      name
      icon
    }
  }
`;

export default graphql(tagsQuery, {
  props: ({ data }) => ({ ...data }),
})(TagsFilterModal);
