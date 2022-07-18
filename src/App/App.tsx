import React, { useState } from 'react';
import logo from './logo.svg';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import PageContainer from './PageContainer/PageContainer';
import LandingPage from './LandingPage/LangingPage';
import { Container } from 'react-dom';
import AboutMe from './AboutMe/AboutMe';

function App() {
	// const particlesInit = async (main: any) => {
	// 	console.log(main);
	// 	await loadFull(main);
	// };
	
	// const particlesLoaded = (container: Container) => {
	// 	console.log(container);
	// };
  return (
    <React.Fragment>
    {/* <Particles id='particles' init={particlesInit} loaded={particlesLoaded} /> */}
    <Routes>
    	<Route path='/' element={ <PageContainer /> }>
    	    <Route index element={ <LandingPage /> }></Route>
			<Route path='/about' element={ <AboutMe /> }></Route>
    	</Route>
    </Routes>

    </React.Fragment>
  );
}

export default App;
