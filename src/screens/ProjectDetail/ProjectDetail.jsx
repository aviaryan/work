import React, {Component} from 'react'
import lib from '../../lib/utils.js'

export default class ProjectDetail extends Component {
	render() {
		let project = lib.getProjectById(this.props.match.params.id);
		if (project === null) {
			return (
				<div>404</div>
			);
		}
		return (
			<div>Hii {this.props.match.params.id}</div>
		);
	}
}
