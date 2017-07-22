import React, {Component} from 'react'

import styles from './ProjectLinks.css'


export default class ProjectLinks extends Component {
	render () {
		// websites
		let websitesDOM;
		if (this.props.websites) {
			websitesDOM = this.props.websites.map((w) =>
				<a href={w} target="_blank">
					<img className={styles.logo} src="../../../img/link-symbol.svg" />
				</a>
			);
		}

		return (
			<span className={styles.projectLinks}>

				{this.props.github &&
				<a href={this.props.github} target="_blank">
					<img className={styles.logo} src="../../../img/github-logo.svg" />
				</a>
				}

				{this.props.websites &&
				websitesDOM}
			</span>
		);
	}
}
