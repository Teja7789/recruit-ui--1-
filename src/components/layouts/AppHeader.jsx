import {
    cilApplicationsSettings,
    cilBell,
    cilCog,
    cilEnvelopeLetter,
    cilEnvelopeOpen,
    cilList,
    cilMenu,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
    CButton,
    CContainer,
    CForm,
    CFormInput,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderToggler,
    CNavbarBrand,
    CNavItem,
    CNavLink,
} from '@coreui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AppHeaderDropdown } from './header/index';

const AppHeader = () => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
    const currentPageName = useSelector((state) => state.headerTitle.currentPageName);

    return (
        <CHeader position="sticky" className="mb-2">
            <CContainer fluid>
                <CHeaderToggler className="ps-1" onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}>
                    <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                    <CIcon height={48} alt="Logo" />
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavbarBrand className="mb-0 h1"></CNavbarBrand>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink>{currentPageName}</CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="d-md-flex m-auto">
                    <CForm className="d-flex">
                        <CFormInput type="search" className="me-2" placeholder="Search" />
                    </CForm>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilBell} size="lg" />
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilEnvelopeLetter} size="lg" />
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilCog} size="lg" />
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <AppHeaderDropdown />
                </CHeaderNav>
            </CContainer>
        </CHeader>
    );
};

export default AppHeader;
