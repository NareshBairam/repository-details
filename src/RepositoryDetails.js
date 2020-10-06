import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const RepositoryDetails = () => {

    const { contributorList } = useSelector((state) => state.repos);

    return (
        <div>
            {
                contributorList && contributorList.length > 0 &&
                <DataTable value={contributorList}>
                    <Column field="name" header="Contributor Name"></Column>
                </DataTable>
            }
        </div>
    );
}

export default RepositoryDetails;
