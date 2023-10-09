import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';

import { AppSidebarNav } from './AppSidebarNav';

import SimpleBar from 'simplebar-react';
import 'simplebar-core/dist/simplebar.css';

// sidebar nav config
import CIcon from '@coreui/icons-react';
import NavBarMenu from '../../utils/NavBarMenu';

const AppSidebar = () => {
    const dispatch = useDispatch();
    const unfoldable = useSelector((state) => state.sidebar.sidebarUnfoldable);
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);

    return (
        <CSidebar
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch({ type: 'set', sidebarShow: visible });
            }}
        >
            <CSidebarBrand className="d-none d-md-flex" to="/recruit/">
                <CIcon className="sidebar-brand-full" height={35} />
                <CIcon className="sidebar-brand-narrow" height={35} />
            </CSidebarBrand>
            <CSidebarNav>
                <SimpleBar>
                    <AppSidebarNav items={NavBarMenu} />
                </SimpleBar>
            </CSidebarNav>
            <CSidebarToggler
                className="d-none d-lg-flex"
                onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
            />
        </CSidebar>
    );
};

export default React.memo(AppSidebar);
