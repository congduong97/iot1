import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContainer} from '../../elements';
import {COLOR, SIZE} from '../../utils/resource';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }

  handleChangeText = text => {
    this.state.code = text;
  };

  handleSave = async () => {
    const {code} = this.state;
    const {navigation} = this.props;
    if (code === '123') {
      await AsyncStorage.setItem('userToken', 'abc');
      navigation.navigate('App');
    } else {
      alert('sai r');
    }
  };

  render() {
    return (
      <AppContainer
        style={{backgroundColor: '#397de9', justifyContent: 'center'}}>
        <Text
          style={{color: COLOR.white, fontSize: SIZE.H1, fontWeight: 'bold'}}>
          CODE NUMBER
        </Text>
        <TextInput
          onChangeText={this.handleChangeText}
          style={{
            width: SIZE.width(60),
            padding: SIZE.padding,
            fontSize: SIZE.H4,
            backgroundColor: COLOR.white,
            borderWidth: 1,
            borderRadius: SIZE.padding / 2,
            marginVertical: SIZE.padding,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: SIZE.width(60),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={this.handleQRCode}
            style={{
              backgroundColor: COLOR.white,
              paddingVertical: SIZE.padding,
              borderWidth: 1,
              borderRadius: SIZE.padding / 2,
              width: SIZE.width(25),
            }}>
            <Text style={{fontSize: SIZE.H4, textAlign: 'center'}}>
              QR CODE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleSave}
            style={{
              width: SIZE.width(25),
              backgroundColor: COLOR.white,
              paddingVertical: SIZE.padding,
              borderWidth: 1,
              borderRadius: SIZE.padding / 2,
            }}>
            <Text style={{fontSize: SIZE.H4, textAlign: 'center'}}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </AppContainer>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default Login;
