import { UserAction } from '../actions';
import { GenericAction } from '../types/actions';

const initialState = {
	email: '',
	token: '',
}

const user = (state = initialState, action: GenericAction) => {
	switch (action.type) {
		case UserAction.UPDATE_USER_INFO:
			return {
				...state,
				...action.data,
			};
		default:
			return state;
	}
}

export default user;
