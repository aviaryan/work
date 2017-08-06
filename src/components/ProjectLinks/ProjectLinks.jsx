import React, {Component} from 'react'

import styles from './ProjectLinks.css'
import pathResolver from '../../lib/pathResolver'


export default class ProjectLinks extends Component {
	render () {
		// websites
		let websitesDOM;
		if (this.props.websites) {
			websitesDOM = this.props.websites.map((w) =>
				<a key={w} href={w} target="_blank">
					<img className={styles.logo} src={pathResolver("/img/link-symbol.svg")} />
				</a>
			);
		}

		return (
			<span className={styles.projectLinks}>
				{this.props.websites &&
				websitesDOM}

				{this.props.github &&
				<a href={this.props.github} target="_blank">
					<img className={styles.logo} src={pathResolver("/img/github-logo.svg")} />
				</a>
				}
			</span>
		);
	}
}
