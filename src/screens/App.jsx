import React, {Component} from 'react'

import Search from '../components/Search.js'

export default class App extends Component {
	render() {
		return (
			<div style={styles.root}>
				<Search/>
			</div>
		)
	}
}

const styles = {
	root: {
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '1000px'
	}
};
