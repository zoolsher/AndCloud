import {PROJECT_LIST_LOADING, PROJECT_LIST_LOADING_SUCCESS} from './../actions/actionTypes';

function projectListStartLoading(state = [], action) {
	switch (action.type) {
		case PROJECT_LIST_LOADING:
			var newState = [];
			return newState;
		case PROJECT_LIST_LOADING_SUCCESS:
			var newState = action.projectList.map(($,key)=>{
				return {...$,displayId:key}
			})
			// var newState = action.projectList;
			return newState;
		default:
			return state;
	}
}

export default projectListStartLoading;
