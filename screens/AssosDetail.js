import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import {
  Text,
  ButtonGroup,
  Button as Btn,
} from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Constants } from 'expo';

import AssosScreenHeader from '../components/AssosScreenHeader/AssosScreenHeader';
import AssosDetailsSegment from '../components/AssosDetailsSegment/AssosDetailsSegment';
import AssosContactsSegment from '../components/AssosContactsSegment/AssosContactsSegment';
import AssosAlertSegment from '../components/AssosAlertSegment/AssosAlertSegment';

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
    const { params } = this.props.navigation.state;
    const item = params ? params.assos : null;
    const buttons = ['Détails', 'Contacts', 'Alertes'];

    const { Association, loading } = this.props;
    const { selectedIndex } = this.state;
    let banner;
    let content;
    if (loading) {
      content = <ActivityIndicator animating size="large" />;
      banner = ( 
        <View style={{ width: 400, height: 250, justifyContent: 'center'}}>
          <ActivityIndicator animating size="large" />
        </View>
      );
        
    } else {
      switch (selectedIndex) {
        case 0:
          content = <AssosDetailsSegment assos={Association} />;
          break;
        case 1:
          content = <AssosContactsSegment assos={Association} />;
          break;
        case 2:
          content = <AssosAlertSegment assos={item} />;
          break;
      }
      banner = (
        <View>
          <Image
            source={{ uri: Association.banner }}
            style={{ width: 400, height: 250 }}
          />
          <View style={{ padding: 10, marginTop: -240 }}>
            <AssosScreenHeader
              assos={Association}
              onBackPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
      );
    }
    
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {banner}
        <View style={{ marginTop: 150, padding: 10, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text h4 style={{ color: 'goldenrod' }}>
              {item.name}
            </Text>
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
  query Association($id: ID!, $author: String!) {
    Association(id: $id) {
      id
      name
      banner
      address
      phone
      desc
      tags {
        name
      }
      favorites(filter: {
        author: $author
      }) {
        id
      }
    }
  }
`;

export default graphql(assoQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.assos.id,
      author: Constants.deviceId,
    },
  }),
})(AssosDetail);
