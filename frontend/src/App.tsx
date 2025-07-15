import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import UserManagementPage from './pages/UserManagementPage';
import RoleManagementPage from './pages/RoleManagementPage';
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/users" element={<UserManagementPage/>}/>
                <Route path="/roles" element={<RoleManagementPage/>}/>
                <Route
                    path="/"
                    element={<PrivateRoute><DashboardPage/></PrivateRoute>}
                />
            </Routes>
        </Router>
    );
}
export default App;