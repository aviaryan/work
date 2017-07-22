import React, {Component} from 'react'

import styles from './Header.css'

export default class Header extends Component {
	render() {
		return(
			<div>
				<div className={styles.header}>
					Avi Aryan
				</div>
				<div className={styles.tagline}>
					Rockstar developer
				</div>
			</div>
		);
	}
}
