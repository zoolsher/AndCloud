import { LOAD_LOG_NULL, LOAD_LOG_START, LOAD_LOG_SUCCESS, LOAD_LOG_FAILED } from './../actions/actionTypes';

function log(state = {}, action) {
    switch (action.type) {
        case LOAD_LOG_FAILED:
            var newState = {
                state: LOAD_LOG_FAILED,
                err: action.err
            }
            return newState;
            break;
        case LOAD_LOG_NULL:
            var newState = {
                state: LOAD_LOG_NULL
            }
            return newState;
            break;
        case LOAD_LOG_START:
            var newState = {
                state: LOAD_LOG_START
            }
            return newState;
            break;
        case LOAD_LOG_SUCCESS:
            var newState = {
                state: LOAD_LOG_SUCCESS,
                data: action.data
            }
            return newState;
            break;
        default:
            return state;
    }
}

export default log;