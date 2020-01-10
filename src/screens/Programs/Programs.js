import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AppContainer, AppHeader} from '../../elements';
import {COLOR, SIZE} from '../../utils/resource';

export class Programs extends Component {
  renderTitle = () => {
    return <Text style={{color: COLOR.white, fontSize: SIZE.H3}}>PROGRAM</Text>;
  };

  render() {
    return (
      <AppContainer>
        <AppHeader leftGoBack renderTitle={this.renderTitle} />
        <Text> Programe </Text>
      </AppContainer>
    );
  }
}

export default Programs;
