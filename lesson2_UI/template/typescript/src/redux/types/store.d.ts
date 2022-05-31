import { ActionFunc } from './actions';
import { IUserState } from './user';
import { IDeviceState } from './device';

export type GlobalState = {
	device: IDeviceState,
	user: IUserState,
	_persist: { version: number, rehydrated: boolean }
}

interface Dispatch<A = ActionFunc> {
	<T extends A>(action: T): T
}
export interface StoreWithThunk<S = any, A = ActionFunc> {
	dispatch: Dispatch<A>
	getState(): S
}
