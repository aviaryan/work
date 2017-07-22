import React, {Component} from 'react'

import Tag from '../Tag/Tag.jsx'
import styles from './Project.css'

export default class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let tagsDOM = this.props.tags.map((t) =>
			<Tag key={t} name={t}/>
		);
		return (
			<div className={[styles.project, this.props.id].join(' ')}>
				<div className={styles.projectTitle}>{this.props.name}</div>
				<div className={styles.projectDesc}>{this.props.desc}</div>
				<div className={styles.projectTags}>{tagsDOM}</div>
			</div>
		)
	}
}
