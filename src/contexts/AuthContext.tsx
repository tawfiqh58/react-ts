import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { SERVER_URL } from '../config';

interface ILoginData {
  email: string;
  password: string;
}

interface CurrentUser {
  accessToken: string;
  id: string;
}

type ContextType = {
  currentUser: CurrentUser | null;
  login: (loginData: ILoginData) => Promise<any>;
  logout: () => Promise<void> | true;
};

const baseUrl = `${SERVER_URL}/api/admin`;

const AuthContext = React.createContext<ContextType | null>(null);

const demoLogin = {
  id: '123',
  accessToken: 'xyz',
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(demoLogin);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(['itpAdminToken']);

  const resetCookie = (token: string = '', expr: number = 0) => {
    setCookie('itpAdminToken', token, {
      path: '/',
      maxAge: expr,
    });
  };

  const login = async (loginData: ILoginData) => {
    return axios
      .post(`${baseUrl}/login`, loginData)
      .then((res) => {
        resetCookie(res.data.accessToken, 2592000);
        setCurrentUser(res.data);
        return res;
      })
      .catch(({ response }) => response);
  };

  const logout = () => {
    if (!currentUser) return true;
    const request = axios
      .delete(`${baseUrl}/logout/${currentUser.accessToken}`)
      .then((res) => {
        resetCookie();
        setCurrentUser(res.data);
      });

    return request;
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/auth`, {
        headers: {
          'x-access-token': cookies.itpAdminToken,
        },
      })
      .then((res) => {
        setCurrentUser({ ...res.data, accessToken: cookies.itpAdminToken });
        setLoading(false);
      })
      .catch(({ response }) => {
        console.log(response?.data?.message);
        setLoading(false);
      });
  }, [cookies]);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
