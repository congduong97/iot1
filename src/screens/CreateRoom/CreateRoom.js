import React, {PureComponent} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {AppHeader, AppContainer} from '../../elements';
import {COLOR, SIZE} from '../../utils/resource';
import Icon from 'react-native-vector-icons/Ionicons';
import MoreMenuModal from './items/MoreMenuModal';
import {ModalServive} from '../Home/Services/ModalService';

export default class CreateRoom extends PureComponent {
  renderTitle = () => {
    return (
      <Text style={{color: COLOR.white, fontSize: SIZE.H3}}>CREATE ROOM</Text>
    );
  };

  renderRightHeader = () => {
    return (
      <TouchableOpacity
        hitSlop={{
          top: SIZE.padding,
          bottom: SIZE.padding,
          left: SIZE.padding,
          right: SIZE.padding,
        }}
        onPress={this.renderMoreMenu}>
        <Icon name="md-more" size={2 * SIZE.H5} color={COLOR.white} />
      </TouchableOpacity>
    );
  };

  renderMoreMenu = () => {
    ModalServive.setVisible('more-menu-room');
  };

  render() {
    // const {name} = this.props.navigation.state.params;
    return (
      <AppContainer>
        <AppHeader
          leftGoBack
          renderTitle={this.renderTitle}
          renderRight={this.renderRightHeader}
        />

        <View
          style={{
            flex: 1,
            backgroundColor: COLOR.grey_100,
            width: '90%',
            margin: SIZE.padding,
            marginTop: SIZE.padding * 2,
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              top: -1 * SIZE.width(5),
              left: SIZE.padding * 2,
            }}>
            <Image
              style={{
                width: SIZE.width(20),
                height: SIZE.width(15),
                borderRadius: 4,
              }}
              source={require('../../utils/images/room.jpeg')}
            />
            <Text style={{fontSize: SIZE.H3, marginLeft: 8, color: COLOR.blue}}>
              Room name{' '}
            </Text>
          </View>
        </View>
        <MoreMenuModal />
      </AppContainer>
    );
  }
}
