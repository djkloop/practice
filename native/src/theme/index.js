import React, { Component } from 'react';
import { RootContext } from '../root';

function settingTheme(prefs, defaultStyles) {
  return {
    styles: defaultStyles
  }
}

const theme = defaultStyles => {
  return WrapperedComponent => class extends Component {
    render() {
      return (
        <RootContext.Consumer>
          {context => <WrapperedComponent {...this.props} {...settingTheme(context.prefs, defaultStyles)} />}
        </RootContext.Consumer>
      );
    }
  }
}

export default theme;
