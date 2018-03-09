import _ from 'lodash';
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
      isLoading: false,
      isRefreshing: false,
      modalVisible: false,
      limit: 10,
      start: 0,
      data: [],
      filter: [],
      search: '',
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleLoadMore = _.throttle(this.handleLoadMore,5000).bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    
  }

  makeRemoteRequest(isRefreshing = false) {
    // TODO plug filter state to the url and search text
    return fetch(`${API_URL}/assos?_start=${this.state.start}&_limit=${this.state.limit}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let data;
        let timeout;
        if (isRefreshing) {
          data = responseJson
          timeout = 1500;
        } else {
          data = [...this.state.data, ...responseJson]
          timeout = 0;
        }
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isRefreshing: false,
            data,
          });
        }, 1500);
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount() {
    this.setState({isLoading: true}, () => {
      this.makeRemoteRequest();
    });
  }

  handleRefresh() {
    this.setState({
      isRefreshing: true,
      start: 0,
      limit: 10,
    }, () => {
      this.makeRemoteRequest(true);
    });
  }

  handleLoadMore() {
    const newStart = (this.state.start + this.state.limit);
    this.setState({
      isLoading: true,
      start: newStart,
    }, () => {
      this.makeRemoteRequest();
    });
  }

  handleFilter(checked) {
    this.setState({ filter: Object.keys(checked) });
  }

  handleSearch(text) {
    this.setState({ search: text });
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  renderHeader() {
    return <AssosSearchBar onPressFilter={this.openModal} onSearch={this.handleSearch}/>
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
          refreshing={this.state.isLoading}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
        />
        <TagsFilterModal
          modalVisible={this.state.modalVisible}
          onClose={this.closeModal}
          onFilter={this.handleFilter}
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
