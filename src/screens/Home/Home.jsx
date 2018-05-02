import React, {Component} from 'react'
import {connect} from 'react-redux'
import GeoPattern from 'geopattern'

import Search from '../../components/Search/Search'
import Header from '../../components/Header/Header'
import Project from '../../components/Project/Project'
import styles from './Home.css'

import lib from '../../lib/utils'
import projects from '../../data/projects'
// import store from '../../lib/state'
import config from '../../data/config'
import {setScroll, unsetScroll, setSearch} from '../../actions'


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			projects: projects
		};
		this.inputChange = this.inputChange.bind(this);
	}

	componentDidMount() {
		// set header color
		this.setHeaderColor();
		// document's title
		document.title = config.title;

		// use query param
		// generally passed manually so return
		let searchText = this.props.location.search.substring(1);
		if (searchText) { // optimize, only needed when search has something
			lib.setSearch(searchText);
			return;
		}
		// use internal state
		let st = store.getState();
		if (st.search !== undefined && st.search){
			lib.setSearch(st.search);
			return; // let setState handle scroll
		}
		// scroll state
		if (st.yOffset !== undefined){
			window.scrollTo(0, st.yOffset);
		}
		// clear state
		store.dispatch({type: 'CLEAR'});
	}

	/*
	 * sets a random color to header text
	 */
	setHeaderColor(){
		let str = Date.now().toString();
		let pattern = GeoPattern.generate(str, {
			baseColor: '#8e354b'
		});
		document.getElementsByClassName(styles.headerDiv)[0].style.color = pattern.color;
	}

	inputChange(event) {
		// something was added in the filter. We had AND matching right now.
		// let useState = (event.target.value.indexOf(this.state.searchText) == 0);
		this.props.setSearch(event.target.value);

		this.setState({
			searchText: event.target.value,
			projects: lib.filterProjects(useState ? this.state.projects : projects, event.target.value)
		}, () => {
			lib.focusSearch();
			// set scroll
			let st = store.getState();
			if (st.yOffset !== undefined){
				window.scrollTo(0, st.yOffset);
			}
			store.dispatch({type: 'CLEAR'});
		});
	}

	render() {
		let projectDOM = this.state.projects.map((p) =>
			<Project key={p.id} {...p}/>
		);
		// empty list of projects
		if (projectDOM.length === 0){
			projectDOM = (<div className={styles.noResults}>No results found</div>);
		}
		return (
			<div className={styles.app}>
				<header className={styles.headerDiv}>
					<Header/>
					<Search value={this.props.search} changeHandler={this.inputChange}/>
				</header>
				<div className={styles.content}>
					{projectDOM}
				</div>
				<footer className={styles.footerDiv}>
					<div>
						Avi's <a href="http://aviaryan.in/downloads/resume.pdf#zoom=125" target="_blank">resume</a>
						<span className={styles.horizSpace}>&middot;</span>
						Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" target="_blank">Dave Gandy</a>
					</div>
				</footer>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		search: state.search,
		scroll: state.scroll
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setScroll: pos => dispatch(setScroll(pos)),
		unsetScroll: () => dispatch(unsetScroll()),
		setSearch: term => dispatch(setSearch(term))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
