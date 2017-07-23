import React, {Component} from 'react'

import lib from '../../lib/utils'
import appStyles from '../Home/Home.css'
import styles from './Detail.css'
import Page404 from '../Page404/Page404'
import Tag from '../../components/Tag/Tag'
import GitHubStar from '../../components/GitHubStar/GitHubStar'
import state from '../../lib/state'


export default class ProjectDetail extends Component {

	tagClick(event) {
		let tag = event.target.textContent;
		state.dispatch({type: 'PUT', data: {
			search: tag
		}});
		window.location.href = '#';
	}

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
			<Tag key={t} name={t} clickListener={this.tagClick}/>
		);
		let websitesDOM = [];
		if (project.websites) {
			websitesDOM = project.websites.map((w) =>
				<div key={w}>Website: <a href={w} target="_blank">{w}</a></div>
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
					<div>GitHub: <a href={project.github} target="_blank">{project.github}</a></div>}
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
