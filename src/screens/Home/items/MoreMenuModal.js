import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {SIZE, COLOR} from '../../../utils/resource';
import {ModalServive} from '../Services/ModalService';

export default class MoreMenuModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};
  }

  componentDidMount() {
    ModalServive.onChange('more-menu', this.openModal);
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

  openMoreMenu = () => {
    this.closeModal();
    ModalServive.setVisible('create-room');
  };

  render() {
    const {isVisible} = this.state;
    return (
      <Modal
        isVisible={isVisible}
        style={{margin: 0}}
        backdropColor="transparent"
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={this.closeModal}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: COLOR.white,
            height: 2 * SIZE.H1,
            paddingHorizontal: SIZE.padding * 1.5,
          }}
          onPress={this.openMoreMenu}>
          <Text style={{fontSize: SIZE.H4}}>Create Room</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}
