import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import stylesheet from './stylesheet';
import theme from '../../theme';

@theme(StyleSheet.create(stylesheet))
export default class Header extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
  };

  static defaultProps = {
    leftText: '返回',
    onLeftClick: () => {},
    onRightClick: () => {}
  };

  renderLeftText = () => {
    const { leftText, onLeftClick, styles } = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={onLeftClick}>
        {React.isValidElement(leftText) ? (
          leftText
        ) : (
          <Text style={styles.btnText}>{leftText}</Text>
        )}
      </TouchableOpacity>
    );
  }

  renderRightText = () => {
    const { rightText, onRightClick, styles } = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={onRightClick}>
        {React.isValidElement(rightText) ? (
          rightText
        ) : (
          <Text style={styles.btnText}>{rightText}</Text>
        )}
      </TouchableOpacity>
    );
  }

  renderTitle = () => {
    const { title, styles } = this.props;
    return (
      <View style={styles.title}>
        {React.isValidElement(title) ? (
          title
        ) : (
          <Text style={styles.titleText}>{title}</Text>
        )}
      </View>
    );
  }

  render() {
    const { styles } = this.props;

    return (
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          {this.renderLeftText()}
          {this.renderTitle()}
          {this.renderRightText()}
        </View>
      </View>
    )
  }
}
