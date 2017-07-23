import {createStore} from 'redux'

let manager = (state = {}, action) => {
	switch (action.type) {
		case 'PUT':
			return action.data;
		default:
			return state;
	}
};

let store = createStore(manager);

export {store as default};
