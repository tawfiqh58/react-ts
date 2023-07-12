import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './contexts/AuthContext';
import './App.css';
import Layout from './components/Layout';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

function App() {
  const context = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            context?.currentUser?.id ? <Layout /> : <Navigate to="/login" />
          }
        >
          <Route path="" element={<HomeView />} />
        </Route>
        <Route
          path="/login"
          element={
            context?.currentUser?.id ? <Navigate to="/" /> : <LoginView />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
