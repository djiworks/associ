import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AssosRow from '../components/AssosRow/AssosRow';
import AssosSearchBar from '../components/AssosSearchBar/AssosSearchBar';
import TagsFilterModal from '../components/TagsFilterModal/TagsFilterModal';

import AssosDetail from './AssosDetail';

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

class ExploreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      modalVisible: false,
      data: list,
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderItem = this.renderItem.bind(this);
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
    if (!this.state.loading) return null;

    return <ActivityIndicator animating size="large" />;
  }

  renderItem({ item, index }) {
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
