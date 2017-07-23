import React, {Component} from 'react'

import lib from '../../lib/utils'
import appStyles from '../App/App.css'
import styles from './ProjectDetail.css'
import Page404 from '../Page404/Page404'
import Tag from '../../components/Tag/Tag'
import GitHubStar from '../../components/GitHubStar/GitHubStar'


export default class ProjectDetail extends Component {
	render() {
		let project = lib.getProjectById(this.props.match.params.id);
		// 404
		if (project === null) {
			return (
				<Page404/>
			);
		}
		// tags and websites
		let tagsDOM = project.tags.map((t) =>
			<Tag key={t} name={t}/>
		);
		let websitesDOM = [];
		if (project.websites) {
			websitesDOM = project.websites.map((w) =>
				<div key={w}>Website: <a href={w}>{w}</a></div>
			);
		}
		// render
		return (
			<div className={[appStyles.app, styles.page].join(' ')}>
				<div className={styles.name}>
					<a href="#" className={styles.backLink}>←</a>
					{project.name}
				</div>

				<div className={styles.hr} />

				{project.github &&
				<div className={styles.ghButton}>
					<GitHubStar github={project.githubRepo || project.github}/>
				</div>
				}

				<div className={styles.links}>
					{project.github &&
					<div>GitHub: <a href={project.github}>{project.github}</a></div>}
					{websitesDOM}
				</div>

				<div className={styles.desc}>
					{project.desc}
					<p>{project.more}</p>
				</div>

				<div className={styles.tags}>
					{tagsDOM}
				</div>

			</div>
		);
	}
}
