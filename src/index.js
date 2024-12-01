import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/signup-page/form';
import Homepage from './pages/home.page';
import AllDecksPage from './pages/all-decks.page';
import LoginPage from './pages/login.page';
import UserDeckPage from './pages/user-deck.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<SignUpForm />} />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/all-decks' element={<AllDecksPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/user-deck/*' element={<UserDeckPage />} />
    </Routes>
  </Router>
);
