import React,{useEffect} from 'react';
import { Card } from 'primereact/card';
import PlainLayout from '../../components/layouts/PlainLayout';

import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const DashboardPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setCurrentPageName('Dashboard'));
    },[dispatch])
    return (
        <PlainLayout>
            <Card title="Dashboard"></Card>
        </PlainLayout>
    );
};

export default DashboardPage;
