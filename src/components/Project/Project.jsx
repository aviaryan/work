import React, {Component} from 'react'

import styles from './Project.css'

export default class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div key={this.props.key} className={styles.project}>
				<div className={styles.projectTitle}>{this.props.name}</div>
				<div>{this.props.desc}</div>
			</div>
		)
	}
}
