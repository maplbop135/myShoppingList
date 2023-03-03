import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RecipesPage from './components/RecipesPage';
import Mycalendar from './components/Mycalendar';
import Refrigerator from './components/Refrigerator';
import Auth from './components/Auth/Auth';
import { useDispatch } from 'react-redux';

import { getRecipes } from './actions/recipes'

import './styles.css';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, [currentId, dispatch]);

    return (
        <div className="App">    
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/recipes' element={<RecipesPage currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route path='/my-calendar' element={<Mycalendar />} />
                    <Route path='/refrigerator' element={<Refrigerator />} />
                    <Route path='/auth' element={<Auth />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App; 