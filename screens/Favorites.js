import React from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
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
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{fontSize: 20, color: 'gray'}}>Vous n'avez pas d'associations favorites</Text>
      </View>
    )
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
    const { allFavorites, loading } = this.props;

    let allAssociations = [];

    if (!loading) {
      allAssociations = allFavorites.map((fav) => {
        return fav.association
      });
    }    
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

const favQuery = gql`
  query allFavorites($author: String!) {
    allFavorites(filter: {
      author: $author,
    }) {
      association {
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
  }
`;

export default StackNavigator({
  FavoritesList: {
    screen: graphql(favQuery, {
      props: ({ data }) => ({ ...data }),
      options: () => ({
        variables: {
          author: Constants.deviceId,
        },
      }),
    })(FavoritesScreen),
  },
  AssosDetail: {
    screen: AssosDetail,
  }
});
