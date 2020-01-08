import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {SIZE} from '../utils/resource';
import {DrawerActions} from 'react-navigation-drawer';
import {AppHeader} from '../elements';

export class Home extends Component {
  renderLeftHeader = () => {
    return (
      <TouchableOpacity
        hitSlop={{
          top: SIZE.padding,
          bottom: SIZE.padding,
          left: SIZE.padding,
          right: SIZE.padding,
        }}
        onPress={this.renderToggleDrawer}>
        <Icon name="ios-menu" size={2 * SIZE.H4} color="#355cab" />
      </TouchableOpacity>
    );
  };
  renderToggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  renderTitle = () => {
    return <Text style={{color: '#355cab', fontSize: SIZE.H3}}>Home</Text>;
  };

  render() {
    return (
      <View>
        <AppHeader
          renderLeft={this.renderLeftHeader}
          renderTitle={this.renderTitle}
        />
        {/* <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
      </View>
    );
  }

  _showMoreApp = () => {
    console.log('ibvf');
    console.log(this);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default Home;
