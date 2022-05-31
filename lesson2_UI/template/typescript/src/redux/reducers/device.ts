import { DeviceAction } from '../actions';
import { GenericAction } from '../types/actions';

const initialState = {
	screenWidth: window.innerWidth,
	screenHeight: window.innerHeight,
	statusBarHeight: 20,
	bottomPadding: 0,
	uniqueId: '',
}

const device = (state = initialState, action: GenericAction) => {
	switch (action.type) {
		case DeviceAction.UPDATE_DEVICE:
			return {
				...state,
				...action.data,
			};
		default:
			return state;
	}
}

export default device;
