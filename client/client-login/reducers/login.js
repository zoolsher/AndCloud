import { START_LOGGING,LOGIN_SUCCESS,LOGIN_FAILED } from './../actions/actionTypes';

function login (state = {}, action){
    switch (action.type) {
        case START_LOGGING:
            var newstate = {
              state:"LOGGING_IN",
              username:action.username,
              password:action.password
            }
            return newstate;
        case LOGIN_SUCCESS:
            var newstate = {
                state:"LOGIN_SUCCESS",
                username:state.username,
                password:state.password
            }
            return newstate;
        case LOGIN_FAILED:
            var newState = {
                state:"LOGIN_FAILED",
                username:state.username,
                password:state.password
            }
            return newState
        default:
            return state;
    }
}

export default login;
