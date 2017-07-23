import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './screens/Home/Home'
import Detail from './screens/Detail/Detail'
import styles from './index.css'

ReactDOM.render(
	<Router>
		<div className={styles.router}>
			<Route exact path="/" component={Home}/>
			<Route path="/:id" component={Detail}/>
		</div>
	</Router>,
	document.getElementById('app')
);

// react-hot-loader
if (module.hot){
	module.hot.accept();
}
