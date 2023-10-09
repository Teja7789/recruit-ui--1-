import React from 'react';
import CompanyProfileStep from "./../container/wizardFormSteps/CompanyProfileStep"
import CompanyContactDetailsStep from "./../container/wizardFormSteps/CompanyContactDetailsStep"
import Address from "./../container/wizardFormSteps/Address"
import Documents from "./../container/wizardFormSteps/Documents"
import CompaniesAddUsersStep from "./../container/wizardFormSteps/CompaniesAddUsersStep"

const companiesWizardSteps = [
    {
        id: 'companyProfile',
        name: 'Company Profile',
        component: CompanyProfileStep,
        nextStep: "Contact Details",
    },
    {
        id: 'contactDetails',
        name: 'Contact Details',
        component: CompanyContactDetailsStep,
        nextStep: "Address",
    },
    {
        id: 'address',
        name: 'Address',
        component: Address,
        nextStep: "Documents",
    },
    {
        id: 'documents',
        name: 'Documents',
        component: Documents,
        nextStep: "Add Users",
    },
    {
        id: 'addUsers',
        name: 'Add Users',
        component: CompaniesAddUsersStep,
        nextStep: "End",
    },
];

export default companiesWizardSteps;
