import React, {PureComponent} from 'react';
import {Text, View, Image, Switch, TouchableOpacity} from 'react-native';
import {SIZE} from '../../../utils/resource';
import {ModalServive} from '../Services/ModalService';

export default class DeviceItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  onChangeSwitch = value => {
    this.setState({value});
  };
  onPressDeviceItem = () => {
    ModalServive.setVisible('detail-device');
  };
  render() {
    const {numberDevice} = this.props;
    const {value} = this.state;
    return (
      <TouchableOpacity
        onPress={this.onPressDeviceItem}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 8,
          margin: SIZE.padding,
          backgroundColor: 'white',
          padding: SIZE.padding,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              width: SIZE.width(20),
              height: SIZE.width(15),
              borderRadius: 4,
            }}
            source={require('../../../utils/images/room.jpeg')}
          />
          <View
            style={{marginLeft: SIZE.padding, justifyContent: 'space-around'}}>
            <Text style={{fontSize: SIZE.H5}}>Device {numberDevice}</Text>
            <Text style={{fontSize: SIZE.H5}}> Content: </Text>
          </View>
        </View>

        <Switch value={value} onValueChange={this.onChangeSwitch} />
      </TouchableOpacity>
    );
  }
}
