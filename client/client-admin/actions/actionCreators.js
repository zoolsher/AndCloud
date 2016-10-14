import { LOAD_LOG_NULL, LOAD_LOG_START, LOAD_LOG_SUCCESS, LOAD_LOG_FAILED } from './actionTypes';

export function loadLogStart() {
    return {
        type: LOAD_LOG_START
    }
}

export function loadLogSuccess(data) {
    return {
        type: LOAD_LOG_SUCCESS,
        data: data
    }
}

export function loadLogFailed(err) {
    return {
        type: LOAD_LOG_FAILED,
        err: err
    }
}

export function loadLogNull() {
    return {
        type: LOAD_LOG_NULL,
    }
}