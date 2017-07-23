import React, {Component} from 'react'

import appStyles from '../App/App.css'
import styles from './Page404.css'


export default class Page404 extends Component {
	render() {
		return (
			<div className={appStyles.app}>
				<div className={styles.text404}>404</div>
			</div>
		);
	}
}
