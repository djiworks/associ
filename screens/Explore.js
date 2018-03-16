import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AssosRow from '../components/AssosRow/AssosRow';
import AssosSearchBar from '../components/AssosSearchBar/AssosSearchBar';
import TagsFilterModal from '../components/TagsFilterModal/TagsFilterModal';

import AssosDetail from './AssosDetail';

class ExploreScreen extends React.Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    if (!this.props.loading) return null;

    return (
      <View style={{ flex: 1, paddingTop: 15, alignItems: 'center' }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  renderEmpty() {
    return <Text>pas de résultats...</Text>
  }

  renderItem({ item }) {
    return (
      <AssosRow 
        assos={item}
        onPress={() => this.props.navigation.navigate('AssosDetail', { assos: item })}
      />
    );
  };

  render() {
    const { allAssociations, loading } = this.props;
    return (
      <View style={{ flex: 1, marginTop: 24, backgroundColor: 'white' }}>
        <FlatList
          data={allAssociations}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          //ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          refreshing={loading}
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
      avatar
      tags {
        name
      }
      _ratingsMeta {
        count
      }
    }
  }
`;

export default StackNavigator({
  ExploreList: {
    screen: graphql(associationsQuery, {
      props: ({ data }) => ({ ...data }),
    })(ExploreScreen),
  },
  AssosDetail: {
    screen: AssosDetail,
  },
});
