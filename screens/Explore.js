import React from 'react';
import { SearchBar } from 'react-native-elements';
import { FlatList, View, ActivityIndicator } from 'react-native';

import AssosRow from '../components/AssosRow/AssosRow';
import AssosSearchBar from '../components/AssosSearchBar/AssosSearchBar';
import TagsFilterModal from '../components/TagsFilterModal/TagsFilterModal';

const list = [
  {
    name: 'Amy Farha',
    rating: 3,
    tags: ['sport'],
  },
  {
    name: 'Chris Jackson',
    rating: 5,
    tags: ['sport', 'auto'],
  },
    {
    name: 'Chris Jackson',
    rating: 1,
    tags: ['santé'],
  },
    {
    name: 'Chris Jackson',
    rating: 0,
    tags: ['politique', 'religion', 'social', 'test'],
  },
];

export default class ExploreScreen extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        loading: true,
        modalVisible: false,
        data: list,
      };

      this.renderFooter = this.renderFooter.bind(this);
      this.openModal = this.openModal.bind(this);
    }

  openModal() {
    this.setState({ modalVisible:true });
  }

  renderHeader() {
    // Open not work
    return <AssosSearchBar onPressFilter={this.openModal}/>
  }

  renderFooter() {
    if (!this.state.loading) return null;

    return <ActivityIndicator animating size="large" />;
  }

  renderItem({ item, index }) {
    return <AssosRow assos={item} />
  } // #303337 gray of the search bar

  render() {
    return (
      <View style={{ marginTop: 24 }}>
        <FlatList
          data={this.state.data}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
        />
        <TagsFilterModal modalVisible={this.state.modalVisible} />
      </View>
    );
  }
}
