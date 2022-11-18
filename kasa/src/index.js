import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.scss';

import Header from './components/header/header';
import Home from './pages/home/home';
import Details from './pages/details/details';
import Errors from './pages/errors/errors';
import About from './pages/about/about';
import Footer from './components/footer/footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path='details'>
        <Details />
      </Route>
      <Route path="/errors">
        <Errors />
      </Route>
      <Route path='about'>
        <About />
      </Route>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();