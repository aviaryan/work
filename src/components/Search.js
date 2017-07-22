import React, {Component} from 'react'

export default class Search extends Component {
	render() {
		return (
			<input type="text" placeholder="Search" style={style}/>
		)
	}
}

const style = {
	borderTop: 0,
	borderLeft: 0,
	borderRight: 0
};

