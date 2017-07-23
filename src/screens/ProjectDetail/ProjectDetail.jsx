import React, {Component} from 'react'

import lib from '../../lib/utils.js'
import appStyles from '../App/App.css'
import styles from './ProjectDetail.css'
import Page404 from '../Page404/Page404.jsx'
import ProjectLinks from '../../components/ProjectLinks/ProjectLinks.jsx';


export default class ProjectDetail extends Component {
	render() {
		let project = lib.getProjectById(this.props.match.params.id);
		// 404
		if (project === null) {
			return (
				<Page404/>
			);
		}
		// normal
		return (
			<div className={[appStyles.app, styles.page].join(' ')}>
				<div className={styles.name}>
					{project.name}
				</div>
				<div className={styles.links}>
					<ProjectLinks {...project}/>
				</div>
				<div className={styles.desc}>
					{project.desc}
					<p>{project.more}</p>
				</div>
			</div>
		);
	}
}
