import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageContainer from './PageContainer/PageContainer';
import LandingPage from './LandingPage/LangingPage';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={ <PageContainer /> }>
					<Route index element={ <LandingPage /> }></Route>
					<Route path='/about' element={ <AboutMe /> }></Route>
					<Route path='/skills' element={ <Skills /> }></Route>
					<Route path='/contact' element={ <Contact /> }></Route>
				</Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
