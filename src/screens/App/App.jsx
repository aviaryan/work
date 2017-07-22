import React, {Component} from 'react'

import Search from '../../components/Search/Search.jsx'
import Header from '../../components/Header/Header.jsx'
import styles from './App.css'

export default class App extends Component {
	render() {
		return (
			<div className={styles.app}>
				<header className={styles.headerDiv}>
					<Header/>
					<Search/>
				</header>
			</div>
		)
	}
}
