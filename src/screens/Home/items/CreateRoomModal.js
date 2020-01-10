import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {SIZE, COLOR} from '../../../utils/resource';
import {ModalServive} from '../Services/ModalService';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationService} from '../../../utils/services/NavigationService';

export default class CreateRoomModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isVisible: false, name: ''};
  }

  componentDidMount() {
    ModalServive.onChange('create-room', this.openModal);
  }

  openModal = () => {
    this.setState({
      isVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isVisible: false,
    });
  };

  onOkePress = () => {
    const {name} = this.state;
    this.closeModal();
    NavigationService.navigate('CreateRoom', {name});
  };

  onChangeNameRoom = value => {
    this.state.name = value;
  };

  renderTitle = () => {
    return (
      <Text
        style={{
          fontSize: SIZE.H3,
          backgroundColor: COLOR.blue,
          color: COLOR.white,
          textAlign: 'center',
          padding: SIZE.padding,
        }}>
        Create Room
      </Text>
    );
  };

  render() {
    const {isVisible} = this.state;
    return (
      <Modal
        isVisible={isVisible}
        style={{margin: SIZE.padding}}
        onBackdropPress={this.closeModal}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}>
        <View
          style={{
            backgroundColor: COLOR.blue,
          }}>
          {this.renderTitle()}
          <View style={{padding: SIZE.width(8)}}>
            <TextInput
              onChangeText={this.onChangeNameRoom}
              style={{
                borderColor: COLOR.white,
                fontSize: SIZE.H4,
                borderWidth: 2,
                borderRadius: SIZE.H3,
                backgroundColor: COLOR.blue,
                paddingHorizontal: 8,
                color: COLOR.white,
              }}
              placeholder="Enter Room's Name ..."
              placeholderTextColor={COLOR.white}
            />

            <TouchableOpacity
              onPress={this.onOkePress}
              style={{
                backgroundColor: COLOR.white,
                width: SIZE.width(20),
                paddingVertical: SIZE.padding,
                borderRadius: SIZE.H3,
                width: '100%',
                marginVertical: SIZE.width(4),
              }}>
              <Text
                style={{
                  fontSize: SIZE.H4,
                  color: COLOR.blue,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                OKE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.closeModal}
              style={{
                backgroundColor: COLOR.white,
                width: SIZE.width(20),
                paddingVertical: SIZE.padding,
                borderRadius: SIZE.H3,
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: SIZE.H4,
                  color: COLOR.blue,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
