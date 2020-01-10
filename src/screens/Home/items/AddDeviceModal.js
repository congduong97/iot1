import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {SIZE, COLOR} from '../../../utils/resource';
import {ModalServive} from '../Services/ModalService';
import Icon from 'react-native-vector-icons/AntDesign';
import {DeviceService} from '../Services/DeviceService';

export default class AddDeviceModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isVisible: false, deviceNumber: 1};
  }

  componentDidMount() {
    ModalServive.onChange('add-device', this.openModal);
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

  addDevice = () => {
    const {deviceNumber} = this.state;
    const devices = Math.pow(2, deviceNumber);
    DeviceService.setDevice(devices);
    this.closeModal();
  };

  increaseDevice = () => {
    const {deviceNumber} = this.state;
    if (deviceNumber === 5) {
      return;
    }
    this.setState({deviceNumber: deviceNumber + 1});
  };
  decreaseDevice = () => {
    const {deviceNumber} = this.state;
    if (deviceNumber === 1) {
      return;
    }
    this.setState({deviceNumber: deviceNumber - 1});
  };

  renderAddDevice = () => {
    const {isVisible, deviceNumber} = this.state;
    return (
      <View
        style={{
          backgroundColor: 'white',
        }}>
        {this.renderTitle()}
        <View style={{paddingVertical: SIZE.width(10)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: SIZE.padding,
              marginBottom: SIZE.width(10),
            }}>
            <View
              style={{
                width: SIZE.width(30),
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                hitSlop={{
                  op: SIZE.padding,
                  bottom: SIZE.padding,
                  right: SIZE.padding,
                  left: SIZE.padding,
                }}
                onPress={this.decreaseDevice}>
                <Icon name="minus" size={2 * SIZE.H5} color={COLOR.black} />
              </TouchableOpacity>
              <Text
                style={{
                  width: SIZE.width(30),
                  textAlign: 'center',
                  fontSize: SIZE.H2,
                  color: COLOR.black,
                }}>
                {Math.pow(2, deviceNumber)}
              </Text>

              <TouchableOpacity
                hitSlop={{
                  op: SIZE.padding,
                  bottom: SIZE.padding,
                  right: SIZE.padding,
                  left: SIZE.padding,
                }}
                onPress={this.increaseDevice}>
                <Icon name="plus" size={2 * SIZE.H5} color={COLOR.black} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={this.addDevice}
              style={{
                backgroundColor: COLOR.blue,
                width: SIZE.width(30),
                paddingVertical: SIZE.padding,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: COLOR.blue,
                  textAlign: 'center',
                  fontSize: SIZE.H5,
                }}>
                OK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.closeModal}
              style={{
                backgroundColor: COLOR.blue,
                width: SIZE.width(30),
                paddingVertical: SIZE.padding,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: COLOR.blue,
                  textAlign: 'center',
                  fontSize: SIZE.H5,
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderTitle = () => {
    return (
      <Text
        style={{
          fontSize: SIZE.H3,
          backgroundColor: COLOR.blue,
          color: 'white',
          textAlign: 'center',
          padding: SIZE.padding,
        }}>
        Set device number
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
        animationType="fade"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
        transparent={true}
        animationOut="zoomOutUp">
        {this.renderAddDevice()}
      </Modal>
    );
  }
}
