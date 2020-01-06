import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContainer} from '../elements';
import {COLOR} from '../utils/resource';
import SplashScreen from 'react-native-splash-screen';

export class AppIntro extends PureComponent {
  componentDidMount() {
    this._bootstrapAsync();
    // SplashScreen.hide();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <AppContainer>
        <Text>SplashScreen</Text>
      </AppContainer>
    );
  }
}

export default AppIntro;
