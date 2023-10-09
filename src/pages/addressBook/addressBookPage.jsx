import React, { useState,useEffect } from 'react';
import PlainLayout from '../../components/layouts/PlainLayout';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import MntViewerSteps from '../../components/viewers/MntViewerSteps';
import addressTabs from './config/addressTabs';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';


const AddressBookPage = () => {
    const dispatch = useDispatch();
  const [sidebarVisible, setSidebarVisible] = useState(false);


  useEffect(()=>{
    dispatch(setCurrentPageName('AddressBook'));
},[dispatch])

    const exportTenantActionHandler = () => {
        // Your code to open the sidebar
    };

    const filterTenantActionHandler = () => {
        // Your code to open the sidebar
    };

    const addTenantActionHandler = () => {
        setSidebarVisible(true);
    };
    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHanlder: exportTenantActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterTenantActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addTenantActionHandler,
        },
    ];
    return (
        <PlainLayout>
            <TabMenuContainer tabItems={addressTabs} actionButtons={actionButtons} />
        </PlainLayout>
    );
};

export default AddressBookPage;
