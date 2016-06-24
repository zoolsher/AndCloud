import {START_LOADING_FINISH} from './../actions/actionTypes';

function startLoading(state=true,action){
	switch(action.type){
		case START_LOADING_FINISH:
			var newState=false;
			return newState;
		default:
			return state;
	}
}

export default startLoading;
