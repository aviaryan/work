import React, {Component} from 'react'
import styles from './Search.css'

export default class Search extends Component {
	// type=search helps with the (x) mark
	render() {
		return (
			<input type="search" id="search" placeholder="Filter" autoComplete="off"
						 className={styles.search} onChange={this.props.changeHandler} autoFocus="autofocus"/>
		)
	}
}
