import {LOAD_USER_INFO, LOAD_USER_INFO_SUCCESS, SEARCH_CHANGE, PROJECT_LIST_LOADING, PROJECT_LIST_LOADING_SUCCESS, LOAD_PROJECT_DETAIL, LOAD_PROJECT_DETAIL_SUCCESS} from './actionTypes';

export function loadUserInfo() {
    return {
        type: LOAD_USER_INFO
    };
}

export function loadUserInfoSuccess(user) {
    return {
        type: LOAD_USER_INFO_SUCCESS,
        user
    }
}

export function searchChange(searchText) {
    return {
        type: SEARCH_CHANGE,
        searchText
    }
}

export function projectListLoading() {
    return {
        type: PROJECT_LIST_LOADING
    }
}

export function projectListLoadingSuccess(projectList) {
    return {
        type: PROJECT_LIST_LOADING_SUCCESS,
        projectList
    }
}

export function startLoadProjectDetail(id) {
    return {
        type: LOAD_PROJECT_DETAIL,
        id: id
    }
}

export function loadProjectDetailSuccess(id) {
    return {
        type: LOAD_PROJECT_DETAIL_SUCCESS,
        id: id
    }
}