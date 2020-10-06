import { GET_REPOSITORY_LIST, GET_CONTIBUTOR_LIST, ADD_TO_FAVARITIES, REMOVE_FROM_FAVARITIES } from "./constants";

const initialState = {
    repositoryList: [],
    contributorList: [],
    favariteRepositoryList: []
}

const RepoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOSITORY_LIST:
        case GET_CONTIBUTOR_LIST:
        case ADD_TO_FAVARITIES:
        case REMOVE_FROM_FAVARITIES:
            {
                return {
                    ...state,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

export default RepoReducer;