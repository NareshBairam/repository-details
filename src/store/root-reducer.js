import { combineReducers } from "redux";
import RepoReducer from "./reducer";

const rootReducer = combineReducers({
    repos: RepoReducer,
});

export default rootReducer;