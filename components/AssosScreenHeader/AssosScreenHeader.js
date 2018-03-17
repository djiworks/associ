import React from 'react';
import { Icon } from 'react-native-elements';
import { View, AsyncStorage, Share, Platform } from 'react-native';

import { APP_NAME, APP_URL } from '../../config/settings';

export default class AssosScreenHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFavorites: false,
    }

    this.isFavorites = this.isFavorites.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorite();
  }

  handleClick() {
    const title = `Retrouvez ${this.props.assos.name} sur ${APP_NAME}`;
    const msg = `Découvrez, votez, soyez alerté et plus... sur ${this.props.assos.name} !!!`;
    const url = APP_URL;
    Share.share({
      ...Platform.select({
        ios: {
          message: msg,
          url: url,
        },
        android: {
          message: `${msg} : \n ${url}`,
        }
      }),
      title,
    }, {
      ...Platform.select({
        ios: {
          // iOS only:
          subject: title,
          tintColor: 'goldenrod',
        },
        android: {
          // Android only:
          dialogTitle: `Share : ${this.props.assos.name}`,
        }
      })
    });
  }

  getFavorite = async () => {
    try {
      const value = await AsyncStorage.getItem(`@favorites:${this.props.assos.id}`);
      const isFavorites = value ? true : false;
      this.setState({ isFavorites });
    } catch (error) {
      console.error(error);
    }
  }

  isFavorites() {
    return this.state.isFavorites ? 'heart' : 'heart-o';
  }

  handleFavorites = async () => {
    const isFavorites = this.state.isFavorites;
    this.setState({ isFavorites: !isFavorites });
    try {
      if (isFavorites) {
        await AsyncStorage.removeItem(`@favorites:${this.props.assos.id}`);
      } else {
        await AsyncStorage.setItem(`@favorites:${this.props.assos.id}`, `${this.props.assos.id} as favorite`);
      }
    } catch (error) {
      this.setState({ isFavorites: isFavorites });
    }
  }

  render() {
    const favico = this.isFavorites();
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Icon
          type="font-awesome"
          name="chevron-left"
          size={25}
          color="goldenrod"
          underlayColor="transparent"
          containerStyle={{flex: 1, alignItems:'flex-start'}}
          onPress={this.props.onBackPress}
        />
        <Icon
          type="font-awesome"
          name="share-alt"
          size={25}
          color="goldenrod"
          underlayColor="transparent"
          raised
          onPress={() => { this.handleClick(); }}
        />
        <Icon
          type="font-awesome"
          name={favico}
          size={25}
          color="firebrick"
          underlayColor="transparent"
          raised
          onPress={this.handleFavorites}
        />
      </View>
    );
  }
}