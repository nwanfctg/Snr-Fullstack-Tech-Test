// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import {Role} from "../types/Role";

interface AuthContextType {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    const login = async (username: string, password: string) => {
        // ✅ FAKE login logic (replace with real API call)
        if (username === 'admin' && password === 'admin') {
            setUser({ username, roles: [Role.ADMIN, Role.MANAGER] });
        } else {
            throw new Error('Invalid credentials');
        }
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
