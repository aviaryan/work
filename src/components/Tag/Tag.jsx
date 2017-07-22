import React, {Component} from 'react'

import styles from './Tag.css'

export default class Tag extends Component {
	render() {
		return (
			<span className={styles.tag}>
				{this.props.name}
			</span>
		)
	}
}
