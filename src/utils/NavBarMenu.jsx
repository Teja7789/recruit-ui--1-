import {
    cilAvTimer,
    cilCalculator,
    cilHome,
    cilScreenDesktop,
    cilBuilding,
    cilGroup,
    cilAddressBook,
    cilCreditCard,
    cilTask,
    cilFile,
    cilGift,
    cilDollar
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavItem } from '@coreui/react';
import React from 'react';

const NavBarMenu = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/recruit/dashboard',
        icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Address Book',
        to: '/recruit/addressBook',
        icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Resources',
        to: '/recruit/resources',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Companies',
        to: '/recruit/companies',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Contracts',
        to: '/recruit/contracts',
        icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Timesheets',
        to: '/recruit/timesheets',
        icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Payroll',
        to: '/recruit/payroll',
        icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    },
];

export default NavBarMenu;
