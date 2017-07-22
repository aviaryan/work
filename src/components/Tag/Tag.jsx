import React, {Component} from 'react'

import styles from './Tag.css'

export default class Tag extends Component {
	tagClick(event) {
		let data = event.target.textContent;
		let search = document.getElementById('search');
		search.value = (search.value === "") ? data : search.value + " " + data;
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
