import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './src/root';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
