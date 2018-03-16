import React from 'react';
import { Text, ListItem } from 'react-native-elements';
import { View, FlatList } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AssosHistorySegment extends React.Component {
  renderEmpty() {
    return <Text>Pas d'alerte...</Text>
  }

  renderItem({ item }) {
    const dateObj = new Date(item.date).toLocaleString('fr-FR');
    return (
      <ListItem
        title={`${dateObj} : ${item.title}`}
        subtitle={item.msg}
        hideChevron
        leftIcon={{name: item.icon}}
      />
    );
  }
  render() {
    const { allNotifs, loading } = this.props;
    return (
      <View>
        <FlatList
          data={allNotifs}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmpty}
          refreshing={loading}
        />
      </View>
    );
  }
}

const notifQuery = gql`
  query allNotifs($id: ID!) {
    allNotifs(filter: {
      association: {
        id: $id
      }
    }) {
      id
      title
      msg
      icon
      date
    }
  }
`;

export default graphql(notifQuery, {
  props: ({ data }) => ({ ...data }),
  options: (props) => ({
    variables: {
      id: props.assos.id,
    },
  }),
})(AssosHistorySegment);
