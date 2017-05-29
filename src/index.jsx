import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
	<div>{title}</div>,
	document.getElementById('app')
);

// react-hot-loader
if (module.hot){
	module.hot.accept();
}
