import React, {Component} from 'react'
import GeoPattern from 'geopattern'

import Tag from '../Tag/Tag'
import styles from './Project.css'
import ProjectLinks from '../ProjectLinks/ProjectLinks'

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.desClick = this.desClick.bind(this);
	}

	componentDidMount() {
		let pattern = GeoPattern.generate(this.props.name, {
			baseColor: '#d2f9a8' // #f0fab8
		});
		document.getElementsByClassName(this.props.id)[0].style.backgroundImage = pattern.toDataUrl();
	}

	desClick(event) {
		let query = document.getElementById('search').value;
		window.location.href = '#/' + this.props.id + '?' + query;
	}

	render() {
		// tags
		let tagsDOM = this.props.tags.map((t) =>
			<Tag key={t} name={t}/>
		);
		return (
			<div className={[styles.project, this.props.id].join(' ')}>
				<div className={styles.projectTitle}>
					{this.props.name}
					<ProjectLinks {...this.props}/>
				</div>
				{this.props.date &&
				<div className={styles.projectDate}>
					{this.props.date}
				</div>
				}
				<div className={styles.projectDesc} onClick={this.desClick}>{this.props.desc}</div>
				<div className={styles.projectTags}>{tagsDOM}</div>
			</div>
		)
	}
}
