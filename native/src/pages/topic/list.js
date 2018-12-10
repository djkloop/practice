import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { RootContext } from '../../root';
import Header from '../../components/Header';

export default class List extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title') || '最新';

    return (
      <RootContext.Consumer>
        {context => (
          <View>
            <Header
              title={title}
              leftText={<Icon name="navicon" color="#fff" size={20} />}
              rightText={<Icon name="edit" color="#fff" size={20} />}
              onLeftClick={() => navigation.openDrawer()}
              onRightClick={() => context.authPass('TopicPublish')}
            />
            <Text>话题列表页.</Text>
            <Button title="点击进入话题详情页" onPress={() => navigation.navigate('TopicDetail')} />
          </View>
        )}
      </RootContext.Consumer>
    );
  }
}
