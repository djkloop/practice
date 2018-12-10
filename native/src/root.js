import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigator from './navigator';
import { NavigationActions } from 'react-navigation';

export const RootContext = React.createContext({
  prefs: {},
  authPass: () => {}
});

@connect(({ app }) => ({
  token: app.token,
  prefs: app.prefs
}))
export default class Root extends Component {
  handleAuthIntercept = (routeName) => {
    this.props.token
      ? this.navigator.dispatch(NavigationActions.navigate({ routeName }))
      : this.navigator.dispatch(NavigationActions.navigate({ routeName: 'Signin' }))
  }

  render() {
    return (
      <RootContext.Provider value={{ prefs: this.props.prefs, authPass: (routeName) => this.handleAuthIntercept(routeName) }}>
        <Navigator ref={nav => { this.navigator = nav; }} />
      </RootContext.Provider>
    );
  }
}
