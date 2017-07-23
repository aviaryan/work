import React, {Component} from 'react'
import GeoPattern from 'geopattern'

import Tag from '../Tag/Tag'
import styles from './Project.css'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import store from '../../lib/state'
// import ldColor from '../../lib/ligthenDarkenColor'

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.desClick = this.desClick.bind(this);
	}

	componentDidMount() {
		let pattern = GeoPattern.generate(this.props.name, {
			baseColor: '#d2f9a8' // #f0fab8
		});
		document.getElementsByClassName(this.props.id)[0].style.backgroundColor = pattern.color;
		// let desc = document.getElementsByClassName(this.props.id + 'desc')[0];
		// desc.style.backgroundColor = ldColor(pattern.color, 10);
		// desc.style.borderColor = ldColor(pattern.color, -40);
	}

	desClick(event) {
		let query = document.getElementById('search').value;
		store.dispatch({type: 'PUT', data: {
			search: query,
			yOffset: window.pageYOffset
		}});
		window.location.href = '#/' + this.props.id;
	}

	render() {
		// tags
		let tagsDOM = this.props.tags.map((t) =>
			<Tag key={t} name={t}/>
		);
		return (
			<div className={[styles.project, this.props.id].join(' ')}>
				<div className={this.props.name.length > 20 ? styles.projectTitleSmall : styles.projectTitle}>
					<span className={styles.projectName}>{this.props.name}</span>
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
