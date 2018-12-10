import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const tabMap = [
  { tab: 'all', title: '最新' },
  { tab: 'good', title: '精华' },
  { tab: 'share', title: '分享' },
  { tab: 'ask', title: '问答' },
  { tab: 'offer', title: '招聘' },
];

export default class SiderMenu extends Component {
  navigateToScreen = (params = {}) => {
    const { navigation } = this.props;
    navigation.closeDrawer();
    navigation.navigate('Home', params);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={styles.logo}></View>
          {/* <View style={styles.user}>
            <View style={styles.avatar}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
            </View>
            <View styles={styles.nickname}>
              <Text>青湛</Text>
            </View>
          </View> */}
          <View style={styles.user}>
            <View style={styles.avatar}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
            </View>
            <View>
              <Text onPress={() => navigate('Signin')}>登录 / 注册</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>板块</Text>
            {tabMap.map((item, i) => (
              <Text key={i} style={styles.item} onPress={() => this.navigateToScreen(item)}>{item.title}</Text>
            ))}
          </View>
          <View>
            <Text style={styles.title}>其他</Text>
            <Text style={styles.item} onPress={() => navigate('Setting')}>设置</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 80,
    backgroundColor: '#16982b'
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  avatar: {
    marginRight: 10,
    width: 40,
  },
  nickname: {
    marginLeft: 10
  },
  title: {
    paddingLeft: 10,
    lineHeight: 40,
    backgroundColor: '#f1f1f1'
  },
  item: {
    paddingLeft: 10,
    lineHeight: 40,
  }
});
