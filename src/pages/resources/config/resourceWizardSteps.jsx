import React from 'react';

import ResourceProfile from '../container/resourceWizardForms/ResourceProfile';

const resourceSteps = [
    {
        name: 'Resource',
        component: ResourceProfile,
        nextStep: 'Assign Documents',
    },
    {
        name: 'Assign Documents',
        component: ResourceProfile,
        nextStep: 'Resource',
    },
    {
        name: 'Address',
        component: ResourceProfile,
        nextStep: 'End',
    },
];

export default resourceSteps;
