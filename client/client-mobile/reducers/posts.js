import { INCREMENT_LIKES } from './../actions/actionTypes';

function posts (state = [], action){
    switch (action.type) {
        case INCREMENT_LIKES:
            console.log('increment likes');
            const i = action.index;
            console.log(state);
            return [
                ...state.slice(0,i),
                {...state[i],likes:state[i].likes + 1},
                ...state.slice(i+1)
            ];
            break;
        default:
            return state;
    }
}

export default posts;

// function posts(state = [], action) {
//   switch (action.type) {
//     case 'INCREMENT_LIKES' :
//       const i = action.index;
//       return [
//         ...state.slice(0, i),
//         {...state[i],  likes: state[i].likes + 1 },
//         ...state.slice(i + 1)
//       ];
//     default:
//       return state;
//   }
// }
//
// export default posts;
