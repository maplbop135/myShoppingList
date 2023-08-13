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
import { GoogleOAuthProvider } from '@react-oauth/google';

import './styles.css';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const App:React.FC = () => {
    const [currentId, setCurrentId] = useState<string | null>(null);
    const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();
    const clientId = process.env.GCP_CLIENT_ID;

    useEffect(() => {
        dispatch(getRecipes());
    }, [currentId, dispatch]);

    return (
        <div className="App">
            <GoogleOAuthProvider clientId={clientId?clientId:""}>    
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/recipes' element={<RecipesPage setCurrentId={setCurrentId} />} />
                        <Route path='/my-calendar' element={<Mycalendar />} />
                        <Route path='/refrigerator' element={<Refrigerator />} />
                        <Route path='/auth' element={<Auth />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </GoogleOAuthProvider>
        </div>
    );
}

export default App; 