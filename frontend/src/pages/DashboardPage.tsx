import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user?.name || "User"}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
