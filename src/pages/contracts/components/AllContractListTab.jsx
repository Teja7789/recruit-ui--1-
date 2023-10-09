import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import contractColumnConfig from './../config/contractColumnConfig';
import contractSelectedColumns from '../config/contractSelectedColumns';
import handlecontractActions from '../config/handleContractActions';
import viewContractTabs from '../config/viewContractTabs';
import contractActionMenu from '../config/contractActionMenu';
import { contractData } from '../config/contractData';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContractsRequest, fetchContractsRequest } from '../../../redux/actions/contractActions';
import { Link } from 'react-router-dom';



const AllContractListTab = ({ columnConfig, handleFilterClick }) => {

    const dispatch = useDispatch();

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const { contracts, loading, error } = useSelector((state) => state.contract);
console.log(contracts,"contracts");
    useEffect(() => {
        console.log('******** dispatching 111the event *************');
        dispatch(fetchContractsRequest());
    }, [dispatch]);

    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
const handleDelete = (id) => {
 if(window.confirm("delete id")){
    dispatch(deleteContractsRequest(id));
    dispatch(fetchContractsRequest());
 }
}
const handleId = (id) => {
    id = contracts.map((item,i)=>item.id);
    console.log(id,"id");
}
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (contracts && contracts.length <= 0) {
        return <div>Error</div>;
    }
   
    return (
        <Card>
            <ViewerWithTabs visible={sidebarVisible} onHide={toggleSidebar} tabs={viewContractTabs} />
            {/* <CustomDataTable
                data={contracts}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={contractActionMenu}
                columnsConfig={contractColumnConfig}
                selectedColumns={contractSelectedColumns}
                handleAction={handlecontractActions}
                columnConfig={columnConfig}
                handleFilterClick={handleFilterClick}
                /> */}
                <table>
                    <th>id</th>
                    <th>name</th>
                    <th>Action</th>
                    <th>Edit</th>
                    <tbody>
{contracts && contracts.map((item,i)=>(<tr key={item.id}>
    {/* <th>{i+1}</th> */}
    <td>{item.id}</td>
    <td>{item.username}</td>
    <td onClick={()=> handleDelete(item.id)}>delete</td>
    
    {/* <td><Link to={`/getEdit/${item.id}`}>edit </Link></td> */}
    <td><Link to={`/getEdit/${item.id}`}>edit</Link></td>
   
</tr>))}

                    </tbody>
                </table>

        </Card>
    );
};

export default AllContractListTab;
