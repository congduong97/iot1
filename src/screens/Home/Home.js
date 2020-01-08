import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {SIZE, COLOR} from '../../utils/resource';
import {DrawerActions} from 'react-navigation-drawer';
import {AppHeader, AppContainer} from '../../elements';
import AddDeviceModal from './items/AddDeviceModal';
import {DeviceService} from './Services/DeviceService';
import DeviceItem from './items/DeviceItem';
import DetailItemModal from './items/DetailItemModal';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
    };
  }

  componentDidMount() {
    DeviceService.onChange('device-service', this.addDevices);
  }

  addDevices = data => {
    this.setState({devices: [...data]});
  };

  renderLeftHeader = () => {
    return (
      <TouchableOpacity
        hitSlop={{
          top: SIZE.padding,
          bottom: SIZE.padding,
          left: SIZE.padding,
          right: SIZE.padding,
        }}
        onPress={this.renderToggleDrawer}>
        <Icon name="ios-menu" size={2 * SIZE.H4} color="#355cab" />
      </TouchableOpacity>
    );
  };
  renderToggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  renderTitle = () => {
    return <Text style={{color: '#355cab', fontSize: SIZE.H3}}>Home</Text>;
  };

  renderDevices = ({item, index}) => {
    return <DeviceItem numberDevice={index} />;
  };

  render() {
    const {devices} = this.state;
    return (
      <AppContainer style={{backgroundColor: COLOR.grey_100}}>
        <AppHeader
          renderLeft={this.renderLeftHeader}
          renderTitle={this.renderTitle}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: SIZE.device_width,
            alignItems: 'center',
            paddingVertical: 4,
          }}>
          <Text
            style={{
              fontSize: SIZE.H5,
              color: 'green',
              paddingHorizontal: SIZE.padding,
            }}>
            Online
          </Text>
          <Icon
            style={{paddingRight: SIZE.padding}}
            name="ios-checkmark-circle"
            size={2 * SIZE.H6}
            color="green"
          />
        </View>
        <FlatList
          contentContainerStyle={{
            width: SIZE.device_width,
          }}
          data={devices}
          renderItem={this.renderDevices}
          keyExtractor={(item, index) => '' + index}
        />
        <DetailItemModal />
        <AddDeviceModal ref={this.addDevice} />
      </AppContainer>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default Home;
