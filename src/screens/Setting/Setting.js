import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AppContainer, AppHeader} from '../../elements';
import {SIZE, COLOR} from '../../utils/resource';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

export class Setting extends Component {
  renderTitle = () => {
    return (
      <Text style={{color: COLOR.main_color, fontSize: SIZE.H3}}>Setting</Text>
    );
  };
  render() {
    return (
      <AppContainer>
        <AppHeader leftGoBack renderTitle={this.renderTitle} />
        <View
          style={{
            width: SIZE.device_width,
            padding: SIZE.padding,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: SIZE.width(100),
              paddingLeft: SIZE.padding,
            }}>
            <Text
              style={{
                flex: 0.5,
                fontSize: SIZE.H4,
                color: COLOR.main_color,
              }}>
              SIGN UP CPU
            </Text>
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Icon
                name="ios-checkmark-circle"
                size={2 * SIZE.H4}
                color="green"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: SIZE.width(100),
              paddingLeft: SIZE.padding,
            }}>
            <Text
              style={{
                flex: 0.5,
                fontSize: SIZE.H4,
                color: COLOR.main_color,
              }}>
              CONNECT LOCAL
            </Text>
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Icon name="ios-close-circle" size={2 * SIZE.H4} color="red" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: SIZE.width(100),
              paddingLeft: SIZE.padding,
            }}>
            <Text
              style={{flex: 0.5, fontSize: SIZE.H4, color: COLOR.main_color}}>
              CONNECT ONLINE
            </Text>
            <View style={{flex: 0.5, alignItems: 'center'}}>
              <Icon
                name="ios-checkmark-circle"
                size={2 * SIZE.H4}
                color="green"
              />
            </View>
          </TouchableOpacity>
        </View>
      </AppContainer>
    );
  }
}

export default Setting;
