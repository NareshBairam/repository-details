import Axios from "axios";
import { loadRepositoryList, loadContributorList } from "./action-creators";

export const getRepositoryList = (username) => {
    return async (dispatch, getState) => {
        try {
            let data = await Axios.get(`https://api.github.com/users/${username}/repos`);
            let repos = data && data.data;
            if (!repos) {
                dispatch(loadRepositoryList([]));
            } else {
                repos = repos.map(repo => {
                    return { id: repo.id, name: repo.name, contributorsUrl: repo.contributors_url, isFavorite: false }
                });
                dispatch(loadRepositoryList(repos));
            }
        } catch (error) {
            dispatch(loadRepositoryList({}));
        }
    }
}

export const getContributorList = (contributorsUrl) => {
    return async (dispatch, getState) => {
        try {
            let data = await Axios.get(contributorsUrl);
            let contributors = data.data;
            contributors = contributors.map(contributor => {
                return { id: contributor.id, name: contributor.login }
            });
            dispatch(loadContributorList(contributors));
        } catch (error) {
        }
    }
}
