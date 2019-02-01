import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store} from './store';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

render(
	<Provider store={store}><App /></Provider>, document.getElementById('root')
)

if (module.hot) {
	module.hot.accept();
}