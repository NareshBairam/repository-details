import { GET_REPOSITORY_LIST, GET_CONTIBUTOR_LIST, REMOVE_FROM_FAVARITIES, ADD_TO_FAVARITIES } from './constants';

export function loadRepositoryList(data) {
    return {
        type: GET_REPOSITORY_LIST,
        payload: {
            repositoryList: data
        }
    };
}

export function loadContributorList(data) {
    return {
        type: GET_CONTIBUTOR_LIST,
        payload: {
            contributorList: data
        }
    };
}

export function addToFavorities(data) {
    return {
        type: ADD_TO_FAVARITIES,
        payload: {
            favariteRepositoryList: data
        }
    };
}

export function remvoeFromFavorities(data) {
    return {
        type: REMOVE_FROM_FAVARITIES,
        payload: {
            favariteRepositoryList: data
        }
    };
}