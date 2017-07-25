import React, {Component} from 'react'

import lib from '../../lib/utils'
import appStyles from '../Home/Home.css'
import styles from './Detail.css'
import Page404 from '../Page404/Page404'
import Tag from '../../components/Tag/Tag'
import GitHubStar from '../../components/GitHubStar/GitHubStar'
import state from '../../lib/state'
import patternGen from '../../lib/pattern'
import ldColor from '../../lib/ligthenDarkenColor'


export default class ProjectDetail extends Component {

	constructor(props){
		super(props);
		this.state = {
			project: lib.getProjectById(this.props.match.params.id)
		};
	}

	tagClick(event) {
		let tag = event.target.textContent;
		state.dispatch({type: 'PUT', data: {
			search: tag
		}});
		window.location.href = '#';
	}

	componentDidMount() {
		let pattern = patternGen(this.state.project.name);
		document.getElementsByClassName(styles.name)[0].style.color = ldColor(pattern.color, -90);
	}

	render() {
		let project = this.state.project;
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
				<div key={w}>Website: <a href={w} target="_blank">{lib.getDomain(w)}</a></div>
			);
		}
		// github
		let gh = "";
		if (project.github){
			let re = new RegExp('.*github[^\/]*\/([^\/]+(\/[^\/\#]+)?).*$', 'i');
			let found = project.github.match(re);
			gh = found[1];
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
					<div>GitHub: <a href={project.github} target="_blank">{gh}</a></div>}
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
