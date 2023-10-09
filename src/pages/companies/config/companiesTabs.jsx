import React from 'react';
import AllCompaniesListTab from '../components/AllCompaniesListTab';
import ActiveCompaniesListTab from '../components/ActiveCompaniesListTab';
import InactiveCompaniesListTab from '../components/InactiveCompaniesListTab';

const companiesTabs = ({ columnConfig, handleFilterClick, dataTableRef }) => [
    {
        id: 'allCompaniesList',
        label: 'All',

        content: <AllCompaniesListTab
            columnConfig={columnConfig}
            handleFilterClick={handleFilterClick}
            dataTableRef={dataTableRef} />,
    },
    {
        id: 'activeCompaniesList',
        label: 'Active',

        content: <ActiveCompaniesListTab
            columnConfig={columnConfig}
            handleFilerClick={handleFilterClick} />,
    },
    {
        id: 'inActiveCompaniesList',
        label: 'Inactive',

        content: <InactiveCompaniesListTab
            columnConfig={columnConfig}
            handleFilerClick={handleFilterClick} />,
    },
];

export default companiesTabs;
