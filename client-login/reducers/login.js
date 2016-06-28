import { START_LOGGING } from './../actions/actionTypes';

function login (state = {}, action){
    switch (action.type) {
        case START_LOGGING:
            //fa le g3 qq
            var newstate = {
              state:"LOGGING_IN",
              username:action.username,
              password:action.password
            }
            return newstate;
            break;
        default:
            return state;
    }
}

export default login;
