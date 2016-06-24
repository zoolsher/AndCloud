import {INCREMENT_LIKES,ADD_COMMENT,REMOVE_COMMENT,SEARCH_CHANGE,START_LOADING_FINISH} from './actionTypes';
//increment
export function increment(index){
    return {
        type:INCREMENT_LIKES,
        index
    }
}

// add Comments
export function addComment(postId,author,comment){
    return {
        type:ADD_COMMENT,
        postId,
        author,
        comment
    }
}

// remove comments
export function removeComment(postId , i){
    return {
        type:REMOVE_COMMENT,
        i,
        postId
    }
}

export function searchChange(searchText){
    return{
        type:SEARCH_CHANGE,
        searchText
    }
}

export function startLoadingFinish(){
    return{
        type:START_LOADING_FINISH,
    }
}
// /**
//   Action Creators
//
//   These fire events which the reducer will handle
//   We will later call these functions from inside our component
//
//   Later these functions get bound to 'dispatch' fires the actual event
//   Right now they just return an object
//
//   It's a code convention to use all capitals and snake case for the event names
//   We use const to store the name of the event so it is immutable
//
// */
//
// export function increment(i) {
//   return {
//     type: 'INCREMENT_LIKES',
//     index: i
//   };
// }
//
// /*
//   Comments
// */
//
// export function addComment(postId, author, comment) {
//   return {
//     type: 'ADD_COMMENT',
//     postId,
//     author, // same as author: author
//     comment // same as comment: comment
//   };
// }
//
// export function removeComment(postId, i){
//   return {
//     type: 'REMOVE_COMMENT',
//     i,
//     postId
//   };
// }
