import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/content/Topic",
    "exact": true,
    "component": require('../content/Topic.js').default,
    "_title": "test",
    "_title_default": "test"
  },
  {
    "path": "/content/User",
    "exact": true,
    "component": require('../content/User.js').default,
    "_title": "test",
    "_title_default": "test"
  },
  {
    "path": "/dashboard/Dashboard",
    "exact": true,
    "component": require('../dashboard/Dashboard.js').default,
    "_title": "test",
    "_title_default": "test"
  },
  {
    "path": "/dashboard/components/CountCard",
    "exact": true,
    "component": require('../dashboard/components/CountCard.js').default,
    "_title": "test",
    "_title_default": "test"
  },
  {
    "path": "/user/ForgetPass",
    "exact": true,
    "component": require('../user/ForgetPass.js').default,
    "_title": "test",
    "_title_default": "test"
  },
  {
    "path": "/user/Login",
    "exact": true,
    "component": require('../user/Login.js').default,
    "_title": "test",
    "_title_default": "test"
  },
  {
    "component": () => React.createElement(require('/Users/hcb/Projects/practice/test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "test",
    "_title_default": "test"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
