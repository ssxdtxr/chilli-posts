import React, {createContext, useContext, useMemo, useState} from 'react';
import Cookies from 'js-cookie';
import {http} from "@/http/http"

interface IAuthInitialState {
    jwt: string;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthInitialState>({
    jwt: '',
    login: (_data) => {
        return null;
    },
    logout: () => {
        return null;
    },
});

export const COOKIE_NAME = 'jwt';

export const getAuthToken = (): string => {
    const userData = Cookies.get(COOKIE_NAME);
    return userData ?? ""
};

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [jwt, setJwt] = useState<string>(getAuthToken());
    console.log(jwt);
    const login = (token: string) => {
        Cookies.set(COOKIE_NAME, token);
        setJwt(token);
        http.defaults.headers.Authorization = `Bearer ${token}`;
    };

    const logout = () => {
        setJwt('');
        Cookies.remove(COOKIE_NAME);
        http.defaults.headers.Authorization = ``;
    };

    const value: {
        jwt: string;
        login: (token: string) => void;
        logout: () => void;
    } = useMemo(
        () => ({
            jwt,
            login,
            logout,
        }),
        [jwt],
    );

    return (
        <AuthContext.Provider value={{login: value.login, logout: value.logout, jwt: value.jwt}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
