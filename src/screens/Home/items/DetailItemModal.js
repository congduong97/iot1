import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {SIZE, COLOR} from '../../../utils/resource';
import {ModalServive} from '../Services/ModalService';
import {WheelPicker} from 'react-native-wheel-picker-android';

const hours = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
];

export default class DetailItemModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      time: '',
      showTime: false,
      selectedHourItem: null,
      selectedMinusItem: null,
      selectedSecondItem: null,
    };
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
    this.setState({showTime: true});
  };

  onHourItemSelected = selectedHourItem => {
    this.state.selectedHourItem = selectedHourItem;
  };

  onMinusItemSelected = selectedMinusItem => {
    this.state.selectedMinusItem = selectedMinusItem;
  };

  onSecondItemSelected = selectedSecondItem => {
    this.state.selectedSecondItem = selectedSecondItem;
  };

  onSelectTime = () => {
    this.setState({showTime: true});
  };

  saveSelectTime = () => {
    this.setState({showTime: false});
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
        Detail Item
      </Text>
    );
  };

  renderContent = () => {
    const {
      showTime,
      selectedHourItem,
      selectedMinusItem,
      selectedSecondItem,
    } = this.state;
    let hideTime =
      selectedHourItem === null ||
      selectedMinusItem === null ||
      selectedSecondItem === null;
    if (showTime) {
      return (
        <View>
          <View
            style={{
              padding: SIZE.width(10),
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <WheelPicker
              selectedItem={selectedHourItem}
              style={styles.wheelPicker}
              isCyclic={true}
              itemTextColor={COLOR.grey_500}
              selectedItemTextColor={COLOR.blue}
              hideIndicator={true}
              itemTextSize={SIZE.H2}
              selectedItemTextSize={SIZE.H2}
              data={hours}
              onItemSelected={this.onHourItemSelected}
            />
            <WheelPicker
              selectedItem={selectedMinusItem}
              itemTextColor={COLOR.grey_500}
              style={styles.wheelPicker}
              isCyclic={true}
              selectedItemTextColor={COLOR.blue}
              hideIndicator={true}
              itemTextSize={SIZE.H2}
              selectedItemTextSize={SIZE.H2}
              data={hours}
              onItemSelected={this.onMinusItemSelected}
            />
            <WheelPicker
              selectedItem={selectedSecondItem}
              itemTextColor={COLOR.grey_500}
              style={styles.wheelPicker}
              isCyclic={true}
              selectedItemTextColor={COLOR.blue}
              hideIndicator={true}
              itemTextSize={SIZE.H2}
              selectedItemTextSize={SIZE.H2}
              data={hours}
              onItemSelected={this.onSecondItemSelected}
            />
          </View>
          <TouchableOpacity
            onPress={this.saveSelectTime}
            style={{
              backgroundColor: COLOR.blue,
              width: SIZE.width(20),
              paddingVertical: SIZE.padding / 2,
              borderRadius: 8,
              alignSelf: 'center',
              marginVertical: SIZE.padding,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: SIZE.H6,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
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
            borderBottomColor: COLOR.blue,
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
          numberOfLines={3}
          style={{
            textAlignVertical: 'top',
            borderWidth: 1,
            borderColor: COLOR.blue,
            borderRadius: 4,
            paddingHorizontal: 4,
          }}
          placeholder="content"
          placeholderTextColor={COLOR.grey_400}
          value={
            !hideTime &&
            hours[selectedHourItem] +
              ':' +
              hours[selectedMinusItem] +
              ':' +
              hours[selectedSecondItem]
          }
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
              backgroundColor: COLOR.blue,
              width: SIZE.width(20),
              paddingVertical: SIZE.padding / 2,
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: SIZE.H6,
              }}>
              SET TIME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onSelectTime}
            style={{
              backgroundColor: COLOR.blue,
              width: SIZE.width(20),
              paddingVertical: SIZE.padding / 2,
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: 'white',
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
              backgroundColor: COLOR.blue,
              width: SIZE.width(20),
              paddingVertical: SIZE.padding / 2,
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: SIZE.H6,
              }}>
              OK
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.closeModal}
            style={{
              backgroundColor: COLOR.blue,
              width: SIZE.width(20),
              paddingVertical: SIZE.padding / 2,
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: SIZE.H6,
              }}>
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
          {this.renderContent()}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wheelPicker: {
    height: 150,
    width: SIZE.width(20),
  },
});
