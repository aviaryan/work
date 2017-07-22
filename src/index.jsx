import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom'

import App from './screens/App/App.jsx';
import ProjectDetail from './screens/ProjectDetail/ProjectDetail.jsx';
import styles from './index.css';

ReactDOM.render(
	<Router>
		<div className={styles.router}>
			<Route exact path="/" component={App}/>
			<Route path="/:id" component={ProjectDetail}/>
		</div>
	</Router>,
	document.getElementById('app')
);

// react-hot-loader
if (module.hot){
	module.hot.accept();
}
