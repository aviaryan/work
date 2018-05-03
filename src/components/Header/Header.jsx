import React, {Component} from 'react'

import styles from './Header.css'

export default class Header extends Component {
	render() {
		return(
			<div>
				<div className={styles.header}>
					<a className={styles.profileLink} href="https://aviaryan.in" target="_blank">Avi Aryan</a>
				</div>
				<div className={styles.tagline}>
					Rockstar developer
				</div>
			</div>
		);
	}
}
