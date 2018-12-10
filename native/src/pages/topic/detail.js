import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import Header from '../../components/Header';

export default class Detail extends Component {
  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Header
          title="话题详情页"
          leftText={<Icon name="chevron-left" size={14} color="#fff"/>}
          onLeftClick={() => goBack()}
        />
        <Text>话题详情页.</Text>
      </View>
    );
  }
}
