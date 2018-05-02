export const SET_SCROLL = 'SET_SCROLL'
export const UNSET_SCROLL = 'UNSET_SCROLL'
export const SET_SEARCH = 'SET_SEARCH'

export function setScroll(pos){
	return {
		type: SET_SCROLL,
		pos: post
	}
}

export function unsetScroll(){
	return {
		type: UNSET_SCROLL
	}
}

export function setSearch(text){
	return {
		type: SET_SEARCH,
		text: text
	}
}
