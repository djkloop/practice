import React, { Component } from 'react';
import t from 'tcomb-form-native';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';
import Header from '../../components/Header';
import theme from '../../theme';
import stylesheet from './stylesheet/signin';

const Form = t.form.Form;

const formType = t.struct({
  mobile: t.Number,
  password: t.String
});

const formOptions = {
  fields: {
    mobile: {
      label: '手机号',
      placeholder: '手机号',
      error: '请输入正确的手机号',
      keyboardType: 'numeric',
    },
    password: {
      label: '密码',
      placeholder: '密码',
      error: '请输入正确的密码',
      textContentType: 'password',
    }
  }
};

@theme(StyleSheet.create(stylesheet))
@connect()
export default class Signin extends Component {
  state = {
    signinForm: null
  };

  // 登录
  handleSubmit = async () => {
    const value = this.refs.form.getValue();
    if (value) {
      this.props.dispatch({
        type: 'SIGNIN',
        payload: { ...value },
      });

      this.setState({
        signinForm: null
      });
    }
  }

  render() {
    const { signinForm } = this.state;
    const { styles, navigation } = this.props;
    const { goBack } = navigation;

    return (
      <View>
        <Header
          title="登录"
          leftText={<Icon name="chevron-left" size={14} color="#fff"/>}
          onLeftClick={() => goBack()}
        />
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require('../../../assets/logo.png')}
          />
        </View>
        <View style={styles.form}>
          <Form
            ref="form"
            type={formType}
            options={formOptions}
            value={signinForm}
          />
          <TouchableHighlight style={styles.btn} onPress={this.handleSubmit} underlayColor='#99d9f4'>
            <Text style={styles.btnText}>登录</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
