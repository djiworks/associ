import React from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { API_URL } from '../config/settings';
import AssosRow from '../components/AssosRow/AssosRow';
import AssosSearchBar from '../components/AssosSearchBar/AssosSearchBar';
import TagsFilterModal from '../components/TagsFilterModal/TagsFilterModal';

import AssosDetail from './AssosDetail';

class ExploreScreen extends React.Component {
  static navigationOptions = () => {
    return {
      header: null,
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      modalVisible: false,
      data: [],
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount(){
    return fetch(`${API_URL}/assos`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  renderHeader() {
    return <AssosSearchBar onPressFilter={this.openModal} />
  }

  renderFooter() {
    if (!this.state.isLoading) return null;

    return (
      <View style={{flex: 1, paddingTop: 15, alignItems: 'center'}}>
        <ActivityIndicator animating size="large" />
        <Text> Chargement...</Text>
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <AssosRow
        assos={item}
        onPress={() => this.props.navigation.navigate('AssosDetail', {name: item.name})}
      />
    );
  }

  render() {

    return (
      <View style={{ flex: 1, marginTop: 24, backgroundColor: 'white' }}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
        />
        <TagsFilterModal
          modalVisible={this.state.modalVisible}
          onClose={this.closeModal}
        />
      </View>
    );
  }
}

export default StackNavigator({
  ExploreList: {
    screen: ExploreScreen,
  },
  AssosDetail: {
    screen: AssosDetail,
  }
});
