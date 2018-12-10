import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import Header from '../../components/Header';

export default class Setting extends Component {
  render() {
    const { openDrawer } = this.props.navigation;

    return (
      <View>
        <Header
          title="设置"
          leftText={<Icon name="navicon" color="#fff" size={20} />}
          onLeftClick={() => openDrawer()}
        />
        <Text>设置页.</Text>
      </View>
    );
  }
}
