import { SEARCH_CHANGE } from './../actions/actionTypes';

function searchText (state = '', action){
    switch (action.type) {
        case SEARCH_CHANGE:
            const searchText = action.searchText||'';
            return searchText;
            break;
        default:
            return state;
    }
}

export default searchText;
