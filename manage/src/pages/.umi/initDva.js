import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'app', ...(require('/Users/hcb/Projects/practice/test/src/models/app.js').default) });
app.model({ namespace: 'dashboard', ...(require('/Users/hcb/Projects/practice/test/src/models/dashboard.js').default) });
