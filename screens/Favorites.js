import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AssosRow from '../components/AssosRow/AssosRow';

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
];

class FavoritesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mes Favoris',
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: list,
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.renderItem = this.renderItem.bind(this);
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
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={this.state.data}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default StackNavigator({
  FavoritesList: {
    screen: FavoritesScreen,
  },
  AssosDetail: {
    screen: AssosDetail,
  }
});
