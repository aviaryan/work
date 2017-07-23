import React, {Component} from 'react'

import lib from '../../lib/utils.js'
import appStyles from '../App/App.css'
import Page404 from '../Page404/Page404.jsx';


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
			<div className={appStyles.app}>
				{project.name}
			</div>
		);
	}
}
