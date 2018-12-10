import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

export default class Publish extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '发布话题',
      headerLeft: (
        <Icon
          name="close"
          style={{ paddingLeft: 10 }}
          size={24}
          color="#fff"
          onPress={() => navigation.navigate('Home')}
        />
      )
    }
  };

  render() {
    return (
      <View>
        <Text>发布页.</Text>
      </View>
    );
  }
}
