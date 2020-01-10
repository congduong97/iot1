import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AppContainer, AppHeader} from '../../elements';
import {COLOR, SIZE} from '../../utils/resource';

export class Introduce extends Component {
  renderTitle = () => {
    return (
      <Text style={{color: COLOR.white, fontSize: SIZE.H3}}>Introduce</Text>
    );
  };

  render() {
    return (
      <AppContainer>
        <AppHeader leftGoBack renderTitle={this.renderTitle} />
        <Text> Introduce </Text>
      </AppContainer>
    );
  }
}

export default Introduce;
