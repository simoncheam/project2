import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Country from './views/Country';
import Home from './views/Home';
import StateDetail from './views/StateDetail';
import States from './views/States';


const App = (props: AppProps) => {



	return (
		<BrowserRouter>
			<Navbar />
			<Routes>


				<Route path='/' element={<Home />}></Route>
				<Route path='/country' element={<Country />}></Route>
				<Route path='/states' element={<States />}></Route>
				<Route path='/states/:state_id' element={<StateDetail />}></Route>


				{/* <Route path='/verify' element={<Verify />}></Route> */}
				{/* <Route path='/register' element={<Register />}></Route> */}
				{/* <Route path='/confirm' element={<RegistrationConfirm />}></Route> */}
				{/* <Route path='/login' element={<Login />}></Route> */}
				{/* <Route path='/contact' element={<Contact />}></Route> */}
				{/* <Route path='/learn' element={<Learn />}></Route> */}

				{/* User selects from master list */}
				{/* <Route path='/select' element={<SelectValues />}></Route> */}

				{/* User creates personal definitions */}
				{/* <Route path='/define' element={<ValueDefinitions />}></Route> */}

				{/* Congruence rating - pass 6 */}
				{/* <Route path='/congruence' element={<ValueCongruence />}></Route> */}


			</Routes>
		</BrowserRouter>



	);
};

interface AppProps { }



export default App;
