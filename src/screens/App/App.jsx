import React, {Component} from 'react'

import Search from '../../components/Search/Search'
import Header from '../../components/Header/Header'
import Project from '../../components/Project/Project'
import styles from './App.css'

import lib from '../../lib/utils'
import projects from '../../data/projects'


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projects
		};
		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(event) {
		this.setState({
			projects: lib.filterProjects(projects, event.target.value)
		});
	}

	render() {
		let projectDOM = this.state.projects.map((p) =>
			<Project key={p.id} {...p}/>
		);
		return (
			<div className={styles.app}>
				<header className={styles.headerDiv}>
					<Header/>
					<Search changeHandler={this.inputChange}/>
				</header>
				<div className={styles.content}>
					{projectDOM}
				</div>
				<footer className={styles.footerDiv}>
					<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a></div>
				</footer>
			</div>
		)
	}
}
