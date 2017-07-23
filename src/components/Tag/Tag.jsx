import React, {Component} from 'react'

import styles from './Tag.css'
import lib from '../../lib/utils'

export default class Tag extends Component {
	tagClick(event) {
		let data = event.target.textContent;
		let search = document.getElementById('search');
		let vals = search.value.split(' ');
		let dataIndex = vals.indexOf(data);
		if (dataIndex > -1){ // exists, remove it
			vals.splice(dataIndex, 1);
		} else {
			vals.push(data);
		}
		lib.setSearch(vals.join(' '));
	}

	render() {
		return (
			<span className={styles.tag} onClick={this.props.clickListener || this.tagClick}>
				{this.props.name}
			</span>
		)
	}
}
