import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import PostPage from './pages/PostPage';
import RTKPage from './pages/RTKPage';

import Layout from './components/Layout';
import EditPost from './components/rtk/EditPost';
import Add from './components/rtk/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
        </Route>
        <Route path="/counter" element={<Layout />}>
          <Route path="" element={<CounterPage />} />
        </Route>
        <Route path="/post" element={<Layout />}>
          <Route path="" element={<PostPage />} />
        </Route>
        <Route path="/rtk" element={<Layout />}>
          <Route path="" element={<RTKPage />} />
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
