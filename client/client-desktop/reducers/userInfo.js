import { LOAD_USER_INFO, LOAD_USER_INFO_SUCCESS } from './../actions/actionTypes';
function userInfo(state = {}, action) {
	switch (action.type) {
		case LOAD_USER_INFO:
			var newState = {
				name:"正在登录"
			}
			return newState;
		case LOAD_USER_INFO_SUCCESS:
			var user = action.user;
			return user;
		default:
			return state;
	}
}
export default userInfo;
