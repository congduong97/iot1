import React, {PureComponent} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SIZE, COLOR} from '../../../utils/resource';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from 'react-navigation-drawer';
import {ModalServive} from '../Services/ModalService';

export default class ContentComponent extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={() => this.props.navigation.goBack()}>
        <ScrollView>
          <SafeAreaView
            style={{width: SIZE.width(70), paddingHorizontal: SIZE.padding}}>
            <Image
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                marginVertical: SIZE.padding * 2,
              }}
              source={require('../../../utils/images/launch_screen.png')}
            />

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                this.props.navigation.navigate('Home');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: SIZE.padding,
                backgroundColor:
                  this.props.activeItemKey === 'Home' ? COLOR.grey_300 : null,
              }}>
              <Icon name="ios-home" size={2 * SIZE.H4} color="#355cab" />
              <Text
                style={{
                  fontSize: SIZE.H4,
                  paddingLeft: SIZE.padding * 2,
                  color: '#355cab',
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Programs');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: SIZE.padding,
                backgroundColor:
                  this.props.activeItemKey === 'Programs'
                    ? COLOR.grey_300
                    : null,
              }}>
              <Icon name="ios-play-circle" size={2 * SIZE.H4} color="#355cab" />
              <Text
                style={{
                  fontSize: SIZE.H4,
                  paddingLeft: SIZE.padding * 2,
                  color: '#355cab',
                }}>
                Programs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Setting');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: SIZE.padding,
                backgroundColor:
                  this.props.activeItemKey === 'Setting'
                    ? COLOR.grey_300
                    : null,
              }}>
              <Icon name="ios-settings" size={2 * SIZE.H4} color="#355cab" />
              <Text
                style={{
                  fontSize: SIZE.H4,
                  paddingLeft: SIZE.padding * 2,
                  color: '#355cab',
                }}>
                Settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                ModalServive.setVisible('add-device');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: SIZE.padding,
                backgroundColor:
                  this.props.activeItemKey === 'Reload' ? COLOR.grey_300 : null,
              }}>
              <Icon name="ios-refresh" size={2 * SIZE.H4} color="#355cab" />
              <Text
                style={{
                  fontSize: SIZE.H4,
                  paddingLeft: SIZE.padding * 2,
                  color: '#355cab',
                }}>
                Reload Device
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                width: SIZE.width(70),
                backgroundColor: '#355cab',
                position: 'relative',
                left: SIZE.padding * -1,
              }}></View>
            <Text
              style={{
                fontSize: SIZE.H4,
                color: COLOR.grey_700,
                paddingVertical: SIZE.padding,
              }}>
              Communication
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Introduce');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: SIZE.padding,
                backgroundColor:
                  this.props.activeItemKey === 'Introduce'
                    ? COLOR.grey_300
                    : null,
              }}>
              <Icon
                name="ios-information-circle-outline"
                size={2 * SIZE.H4}
                color="#355cab"
              />
              <Text
                style={{
                  fontSize: SIZE.H4,
                  paddingLeft: SIZE.padding * 2,
                  color: '#355cab',
                }}>
                Introduce
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </TouchableOpacity>
    );
  }
}
