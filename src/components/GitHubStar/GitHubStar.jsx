import React, {Component} from 'react'

export default class GitHubStar extends Component {
	render() {
		let re = new RegExp('.*github[^\/]*\/([^\/]+)\/([^/]+)($|.*)', 'i');
		let found = this.props.github.match(re);
		return (
			<iframe
				src={'https://ghbtns.com/github-btn.html?user=' + found[1] + '&repo=' + found[2] + '&type=star&count=true&size=large'}
				frameBorder="0" scrolling="0" width="160px" height="30px" />
		);
	}
}
