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
    this.state = {isVisible: false, devices: []};
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
    DeviceService.setDevice(this.state.devices);
    this.closeModal();
  };

  increaseDevice = () => {
    this.setState({devices: [...this.state.devices, {}]});
  };
  decreaseDevice = () => {
    let {devices} = this.state;
    if (devices.length === 0) {
      return;
    }
    this.state.devices.pop();
    this.setState({devices: [...this.state.devices]});
  };

  renderAddDevice = () => {
    const {isVisible, devices} = this.state;
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
              <TouchableOpacity onPress={this.decreaseDevice}>
                <Icon name="minus" size={2 * SIZE.H5} color="#355cab" />
              </TouchableOpacity>
              <Text
                style={{
                  width: SIZE.width(30),
                  textAlign: 'center',
                  fontSize: SIZE.H2,
                  color: COLOR.main_color,
                }}>
                {devices.length}
              </Text>

              <TouchableOpacity onPress={this.increaseDevice}>
                <Icon name="plus" size={2 * SIZE.H5} color="#355cab" />
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
                backgroundColor: COLOR.main_color,
                width: SIZE.width(30),
                paddingVertical: SIZE.padding,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: COLOR.main_color,
                  textAlign: 'center',
                  fontSize: SIZE.H5,
                }}>
                OK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.closeModal}
              style={{
                backgroundColor: COLOR.main_color,
                width: SIZE.width(30),
                paddingVertical: SIZE.padding,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: COLOR.main_color,
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
          backgroundColor: COLOR.main_color,
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
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}>
        {this.renderAddDevice()}
      </Modal>
    );
  }
}
