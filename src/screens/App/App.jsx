import React, {Component} from 'react'

import Search from '../../components/Search/Search.jsx'
import Header from '../../components/Header/Header.jsx'
import Project from '../../components/Project/Project.jsx'
import styles from './App.css'

import projects from '../../data/projects.js'


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projects
		};
	}

	render() {
		let project = this.state.projects.map((p) =>
			<Project {...p}/>
		);
		return (
			<div className={styles.app}>
				<header className={styles.headerDiv}>
					<Header/>
					<Search/>
				</header>
				<div className={styles.content}>
					{project}
				</div>
			</div>
		)
	}
}
