import React from 'react'
import AllAddressListTab from '../components/AllAddressListTab';
import ActiveAddressListTab from '../components/ActiveAddressListTab';
import InActiveAddressListTab from '../components/InActiveAddressListTab';

const addressTabs = [
    {
        id: 'allUsersList',
        label: 'All',

        content: <AllAddressListTab />,
    },
    {
        id: 'activeUsersList',
        label: 'Active',

        content: <ActiveAddressListTab />,
    },
    {
        id: 'inactiveUsersList',
        label: 'InActive',

        content: <InActiveAddressListTab />,
    },

    // Add more tabs as needed
];

export default addressTabs
