import {createStore} from 'redux'

let manager = (state = {}, action) => {
	switch (action.type) {
		case 'PUT':
			return action.data;
		case 'CLEAR':
			return {};
		default:
			return state;
	}
};

let store = createStore(manager);

export {store as default};
