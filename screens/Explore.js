import _ from 'lodash';
import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AssosRow from '../components/AssosRow/AssosRow';
import AssosSearchBar from '../components/AssosSearchBar/AssosSearchBar';
import TagsFilterModal from '../components/TagsFilterModal/TagsFilterModal';

class ExploreScreen extends React.Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
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
    this.handleLoadMore = _.throttle(this.handleLoadMore, 5000).bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleRefresh() {}

  handleLoadMore() {}

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
    this.setState({ modalVisible: false });
  }

  renderHeader() {
    return (
      <AssosSearchBar
        onPressFilter={this.openModal}
        onSearch={this.handleSearch}
      />
    );
  }

  renderFooter() {
    if (!this.state.isLoading) return null;

    return (
      <View style={{ flex: 1, paddingTop: 15, alignItems: 'center' }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  renderItem = ({ item }) => {
    return <AssosRow assos={item} {...this.props} />;
  };

  render() {
    const { allAssociations, loading } = this.props;
    if (loading) return null;
    return (
      <View style={{ flex: 1, marginTop: 24, backgroundColor: 'white' }}>
        <FlatList
          data={allAssociations}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
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

const associationsQuery = gql`
  {
    allAssociations {
      id
      name
      tags
    }
  }
`;

export default graphql(associationsQuery, {
  props: ({ data }) => ({ ...data }),
})(ExploreScreen);
