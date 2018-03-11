import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
// import { StackNavigator } from 'react-navigation';

import AssosRow from '../components/AssosRow/AssosRow';
import AssosSearchBar from '../components/AssosSearchBar/AssosSearchBar';
// import TagsFilterModal from '../components/TagsFilterModal/TagsFilterModal';
import { associationFetch } from '../actions/AssociationActions';

import AssosDetail from './AssosDetail';

class ExploreScreen extends Component {
  // static navigationOptions = () => {
  //   return {
  //     header: null,
  //   };
  // };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoading: true,
  //     isRefreshing: false,
  //     modalVisible: false,
  //     limit: 10,
  //     start: 0,
  //     data: [],
  //     filter: [],
  //     search: '',
  //   };

  //   this.renderFooter = this.renderFooter.bind(this);
  //   this.renderHeader = this.renderHeader.bind(this);
  //   this.openModal = this.openModal.bind(this);
  //   this.closeModal = this.closeModal.bind(this);
  //   this.renderItem = this.renderItem.bind(this);
  //   this.handleRefresh = this.handleRefresh.bind(this);
  //   this.handleLoadMore = _.throttle(this.handleLoadMore, 5000).bind(this);
  //   this.handleFilter = this.handleFilter.bind(this);
  //   this.handleSearch = this.handleSearch.bind(this);
  // }

  componentWillMount() {
    this.props.associationFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ associations }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(associations);
  }

  handleRefresh() {
    this.setState(
      {
        isRefreshing: true,
        start: 0,
        limit: 10,
      },
      () => {
        this.makeRemoteRequest(true);
      },
    );
  }

  handleLoadMore() {
    const newStart = this.state.start + this.state.limit;
    // this.setState(
    //   {
    //     isLoading: true,
    //     start: newStart,
    //   },
    //   () => {
    //     this.makeRemoteRequest();
    //   },
    // );
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
    if (!this.state.isLoading) return null;

    return (
      <View style={{ flex: 1, paddingTop: 15, alignItems: 'center' }}>
        <ActivityIndicator animating size="large" />
        <Text> Chargement...</Text>
      </View>
    );
  }

  renderRow(association) {
    return (
      <AssosRow
        assos={association}
        key={association._id}
        onPress={() => Actions.associationDetail({ association })}
      />
    );
  }

  // renderItem({ item }) {
  //   return (
  //     <AssosRow
  //       assos={item}
  //       key={item._id}
  //       onPress={() =>
  //         this.props.navigation.navigate('AssosDetail', { name: item.name })
  //       }
  //     />
  //   );
  // }

  render() {
    if (this.props.isLoading) {
      return <ActivityIndicator animating size="large" />;
    }
    return (
      <View style={{ flex: 1, marginTop: 24, backgroundColor: 'white' }}>
        {/* <FlatList
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
        /> */}

        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  const { isLoading, associations } = state.explorer;
  return { isLoading, associations };
};

export default connect(mapStateToProps, { associationFetch })(ExploreScreen);

// export default ExploreScreen;

// export default StackNavigator({
//   ExploreList: {
//     screen: ExploreScreen,
//   },
//   AssosDetail: {
//     screen: AssosDetail,
//   },
// });
