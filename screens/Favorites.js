import React from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

    this.renderFooter = this.renderFooter.bind(this);
    this.renderItem = this.renderItem.bind(this);
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
    return <Text>Vous n\'avez pas d\'associations favorites</Text>
  }

  renderItem({ item }) {
    return (
      <AssosRow 
        assos={item}
        onPress={() => this.props.navigation.navigate('AssosDetail', { assos: item })}
      />
    );
  }

  render() {
    const { allAssociations, loading } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={allAssociations}
          keyExtractor={item => item.id}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          refreshing={loading}
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
      _favoritesMeta {
        count
      }
      _followsMeta {
        count
      }
    }
  }
`;

export default StackNavigator({
  FavoritesList: {
    screen: graphql(associationsQuery, {
      props: ({ data }) => ({ ...data }),
    })(FavoritesScreen),
  },
  AssosDetail: {
    screen: AssosDetail,
  }
});
