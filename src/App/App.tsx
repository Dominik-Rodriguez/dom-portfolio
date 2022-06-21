import React, { useState } from 'react';
import logo from './logo.svg';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import PageContainer from './PageContainer/PageContainer';
import LandingPage from './LandingPage/LangingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <PageContainer /> }>
        <Route index element={ <LandingPage /> }></Route>
      </Route>
    </Routes>
  );
}

export default App;
