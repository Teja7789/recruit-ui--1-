import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import { I18nProvider } from './i18n/i18n';

import AddressBookPage from './pages/addressBook/addressBookPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import PayrollListPage from './pages/payroll/PayrollListPage';
import LoginPage from './pages/LoginPage';
import TimesheetListPage from './pages/timesheet/TimesheetListPage';
import ResourceListPage from './pages/resources/ResourceListPage';
import ContractListPage from './pages/contracts/ContractListPage';
import CompaniesListPage from './pages/companies/CompaniesListPage';
import Edit from './pages/contracts/components/Edit';

import ReactPagination from './pages/PaginationTable/ReactPagination';
// import YourComponent from './pages/ContractFinishStep/YourComponent';

function App() {
    return (
        <I18nProvider>
            <BrowserRouter>
                <Routes> 
                    <Route path="/recruit/" element={<LoginPage />} />
                    <Route path="/recruit/dashboard" element={<DashboardPage />} />
                    <Route path="/recruit/addressBook" element={<AddressBookPage />} />
                    <Route path="/recruit/payroll" element={<PayrollListPage />} />
                    <Route path="/recruit/timesheets" element={<TimesheetListPage/>} />
                    <Route path="/recruit/resources" element={<ResourceListPage />} />
                    <Route path="/recruit/contracts" element={<ContractListPage />} />
                    <Route path="/recruit/companies" element={<CompaniesListPage />} />
                    <Route path="/getEdit/:id" element={<Edit />} />
                    <Route path="/reactPagination" element={<ReactPagination/>}/>
                </Routes>
            </BrowserRouter>
        </I18nProvider>
    );
}

export default App;
