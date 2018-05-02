import {SET_SCROLL, SET_SEARCH, UNSET_SCROLL} from './actions'

export default function showcase(state = {}, action) {
	switch (action.type) {
		case SET_SCROLL:
			return { ...state, scroll: action.pos }
		case UNSET_SCROLL:
			if (state.hasOwnProperty('scroll')) {
				delete state['scroll']
			}
			return state
		case SET_SEARCH:
			return { ...state, search: action.text }
		default:
			return state
	}
}
