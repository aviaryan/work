import React, {Component} from 'react'
import styles from './Search.css'

export default class Search extends Component {
	render() {
		return (
			<input type="text" id="search" placeholder="Filter" className={styles.search} onChange={this.props.changeHandler}/>
		)
	}
}
