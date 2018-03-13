import React from 'react';
import { View, Image } from 'react-native';
import {
  Text,
  Rating,
  ButtonGroup,
  Button as Btn,
} from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AssosScreenHeader from '../components/AssosScreenHeader/AssosScreenHeader';
import AssosDetailsSegment from '../components/AssosDetailsSegment/AssosDetailsSegment';
import AssosContactsSegment from '../components/AssosContactsSegment/AssosContactsSegment';
import AssosHistorySegment from '../components/AssosHistorySegment/AssosHistorySegment';

class AssosDetail extends React.Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Détails', 'Contacts', 'Historique'];
    const { Association, loading } = this.props;
    if (loading) return null;
    const { selectedIndex } = this.state;
    let content;
    switch (selectedIndex) {
      case 0:
        content = <AssosDetailsSegment {...this.props} />;
        break;
      case 1:
        content = <AssosContactsSegment {...this.props} />;
        break;
      case 2:
        content = <AssosHistorySegment {...this.props} />;
        break;
    }
    // let content = <Text>taaaa</Text>;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Image
          source={{ uri: 'http://via.placeholder.com/400x250' }}
          style={{ width: 400, height: 250 }}
        />
        <View style={{ padding: 10, marginTop: -240 }}>
          <AssosScreenHeader
            onBackPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{ marginTop: 150, padding: 10, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text h4 style={{ color: 'goldenrod' }}>
              {Association.name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Rating
                imageSize={22}
                readonly
                //startingValue={this.props.assos.rating}
              />
            </View>
          </View>
          <Btn
            title="M'alerter"
            rounded
            backgroundColor="goldenrod"
            containerViewStyle={{ alignSelf: 'center' }}
            icon={{ name: 'bell', type: 'font-awesome' }}
          />
        </View>
        <View style={{ padding: 10, flex: 1 }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ marginBottom: 15 }}
          />
          {content}
        </View>
      </View>
    );
  }
}

const assoQuery = gql`
  query Association($id: ID!) {
    Association(id: $id) {
      id
      name
      tags
      description
    }
  }
`;

export default graphql(assoQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id,
    },
  }),
})(AssosDetail);
