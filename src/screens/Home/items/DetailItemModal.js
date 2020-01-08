import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {SIZE, COLOR} from '../../../utils/resource';
import {ModalServive} from '../Services/ModalService';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

export default class DetailItemModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};
    this.scroll = React.createRef();
  }

  componentDidMount() {
    ModalServive.onChange('detail-device', this.openModal);
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

  onSetTime = () => {
    this.scroll.current.scrollTo({
      x: SIZE.width(100, 2 * SIZE.padding),
      y: 0,
      animated: true,
    });
  };

  onSelectTime = () => {
    this.scroll.current.scrollTo({
      x: 2 * SIZE.width(100, 2 * SIZE.padding),
      y: 0,
      animated: true,
    });
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
        Detail Item
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
            backgroundColor: 'white',
            width: SIZE.width(100, 2 * SIZE.padding),
          }}>
          {this.renderTitle()}
          <ScrollView horizontal pagingEnabled ref={this.scroll}>
            <View
              style={{
                paddingVertical: SIZE.width(10),
                paddingHorizontal: SIZE.width(10),
                width: SIZE.width(100, 2 * SIZE.padding),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: SIZE.H5}}>Edit Image</Text>
                <Image
                  style={{
                    width: SIZE.width(20),
                    height: SIZE.width(15),
                    borderRadius: 4,
                  }}
                  source={require('../../../utils/images/room.jpeg')}
                />
              </View>
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  borderBottomColor: COLOR.main_color,
                  fontSize: SIZE.H5,
                  marginVertical: SIZE.padding * 2,
                  paddingHorizontal: 4,
                }}
                placeholder="device"
                placeholderTextColor={COLOR.grey_400}
              />
              <Text style={{fontSize: SIZE.H5}}>Content:</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: COLOR.main_color,
                  borderRadius: 4,
                  paddingHorizontal: 4,
                  height: SIZE.width(20),
                }}
                placeholder="content"
                placeholderTextColor={COLOR.grey_400}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: SIZE.padding,
                }}>
                <TouchableOpacity
                  onPress={this.onSetTime}
                  style={{
                    backgroundColor: COLOR.main_color,
                    width: SIZE.width(20),
                    paddingVertical: SIZE.padding / 2,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      backgroundColor: COLOR.main_color,
                      textAlign: 'center',
                      fontSize: SIZE.H6,
                    }}>
                    SET TIME
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onSelectTime}
                  style={{
                    backgroundColor: COLOR.main_color,
                    width: SIZE.width(20),
                    paddingVertical: SIZE.padding / 2,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      backgroundColor: COLOR.main_color,
                      textAlign: 'center',
                      fontSize: SIZE.H6,
                    }}>
                    SELECT TIME
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={this.closeModal}
                  style={{
                    backgroundColor: COLOR.main_color,
                    width: SIZE.width(20),
                    paddingVertical: SIZE.padding / 2,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      backgroundColor: COLOR.main_color,
                      textAlign: 'center',
                      fontSize: SIZE.H6,
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.closeModal}
                  style={{
                    backgroundColor: COLOR.main_color,
                    width: SIZE.width(20),
                    paddingVertical: SIZE.padding / 2,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      backgroundColor: COLOR.main_color,
                      textAlign: 'center',
                      fontSize: SIZE.H6,
                    }}>
                    CANCEL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingVertical: SIZE.width(10),
                paddingHorizontal: SIZE.width(10),
                width: SIZE.width(100, 2 * SIZE.padding),
              }}>
              <Text>Set time</Text>
            </View>
            <View
              style={{
                paddingVertical: SIZE.width(10),
                paddingHorizontal: SIZE.width(10),
                width: SIZE.width(100, 2 * SIZE.padding),
              }}>
              <Text>Select time</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}
