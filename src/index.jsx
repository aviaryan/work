import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import showcaseApp from './reducers'
import { createStore } from 'redux'

import Home from './screens/Home/Home'
import Detail from './screens/Detail/Detail'
import styles from './index.css'

const store = createStore(showcaseApp)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className={styles.router}>
				<Route exact path="/" component={Home}/>
				<Route path="/:id" component={Detail}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);

// react-hot-loader
if (module.hot){
	module.hot.accept();
}
