import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App/App.jsx';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

// react-hot-loader
if (module.hot){
	module.hot.accept();
}
