import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { getContributorList } from './store/actions';
import { remvoeFromFavorities, loadRepositoryList } from './store/action-creators';
import history from './routes/history';

const FavoriteRepos = () => {

    const dispatch = useDispatch();
    const { repositoryList, favariteRepositoryList } = useSelector((state) => state.repos);

    const getContributersByRepository = (contributorsUrl) => {
        dispatch(getContributorList(contributorsUrl));
        history.push(`/repo-details`);
    }

    const getViewBody = (repository) => {
        return <Button onClick={e => getContributersByRepository(repository.contributorsUrl)}>View</Button>;
    }

    const handleRemoveFromFavorite = (repository) => {
        let removedRepos = favariteRepositoryList.filter(repo => repo.id !== repository.id);
        dispatch(remvoeFromFavorities(removedRepos));
        let repositories = repositoryList.map(repo => {
            if (repo.id === repository.id) {
                repository.isFavorite = false;
            }
            return repo;
        });
        dispatch(loadRepositoryList([...repositories]));
    }

    const getRemoveFavoriteBody = (repository) => {
        return <Button onClick={e => handleRemoveFromFavorite(repository)}>Remove from favorities</Button>;
    }

    return (
        <div>
            {
                favariteRepositoryList && favariteRepositoryList.length > 0 &&
                <DataTable value={favariteRepositoryList}>
                    <Column field="name" header="Repo Name"></Column>
                    <Column header="" body={getViewBody}></Column>
                    <Column header="" body={getRemoveFavoriteBody}></Column>
                </DataTable>
            }
        </div>
    );
}

export default FavoriteRepos;
