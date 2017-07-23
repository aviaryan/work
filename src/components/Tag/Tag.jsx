import React, {Component} from 'react'

import styles from './Tag.css'

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
		search.value = vals.join(' ');
		// fire event https://stackoverflow.com/questions/23892547/
		let event2 = new Event('input', { bubbles: true });
		search.dispatchEvent(event2);
	}

	render() {
		return (
			<span className={styles.tag} onClick={this.tagClick}>
				{this.props.name}
			</span>
		)
	}
}
