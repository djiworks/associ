import React from 'react';
import { FlatList, View, ActivityIndicator, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AssosRow from '../components/AssosRow/AssosRow';

import AssosDetail from './AssosDetail';

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
      data: [],
    };

    this.renderFooter = this.renderFooter.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.readFavorites()
  }

  readFavorites = async () => {
    this.setState({ loading: true });
    try {
      const favKeys = await AsyncStorage.getAllKeys();
      console.log('>>>>>>', favKeys);
      /*
      >>>>>> Array [
      23:59:24:   "@favorites:2",
      23:59:24:   "@favorites:3",
      23:59:24: ]
      */
    } catch (e) {
      console.error(e);
    }
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
