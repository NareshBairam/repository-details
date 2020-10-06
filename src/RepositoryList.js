import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositoryList, getContributorList } from './store/actions';
import history from './routes/history';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { addToFavorities, loadRepositoryList } from './store/action-creators';

const RepositoryList = () => {

    const dispatch = useDispatch();
    const { repositoryList, favariteRepositoryList, contributorList } = useSelector((state) => state.repos);

    // useEffect(() => {
    // if (repositoryList && repositoryList.length == 0) {
    //     dispatch(loadRepositoryList([
    //         {
    //             id: 1,
    //             name: "Repo1",
    //             isFavorite: false
    //         },
    //         {
    //             id: 2,
    //             name: "Repo2",
    //             isFavorite: false
    //         },
    //     ]))
    // }
    // }, [])

    const [username, setUsername] = useState("");

    const getRepositoriesByUsername = () => {
        dispatch(getRepositoryList(username));
    }

    const getContributersByRepository = (contributorsUrl) => {
        dispatch(getContributorList(contributorsUrl));
        history.push(`/repo-details`);
    }

    const inputChange = (event) => {
        setUsername(event.target.value);
    }

    const getViewBody = (repository) => {
        return <Button onClick={e => getContributersByRepository(repository.contributorsUrl)}>View</Button>;
    }

    const handleAddToFavorite = (repository) => {
        let repositories = repositoryList.map(repo => {
            if (repo.id === repository.id) {
                repository.isFavorite = true;
            }
            return repo;
        });
        dispatch(loadRepositoryList([...repositories]));
        dispatch(addToFavorities([...favariteRepositoryList, repository]));
    }

    const getAddToFavoriteBody = (repository) => {
        return !repository.isFavorite && <Button onClick={e => handleAddToFavorite(repository)}>Add to favorities</Button>;
    }

    return (
        <div>
            <div style={{
                justifyContent: "center",
                display: "flex"
            }}>
                <input placeholder="Enter github username" onChange={inputChange}></input>
                <Button onClick={getRepositoriesByUsername}>Get Repositories</Button>
            </div>
            {
                repositoryList && repositoryList.length > 0 &&
                <DataTable value={repositoryList}>
                    <Column field="name" header="Repo Name"></Column>
                    <Column header="" body={getViewBody}></Column>
                    <Column header="" body={getAddToFavoriteBody}></Column>
                </DataTable>
            }
        </div>
    );
}

export default RepositoryList;
