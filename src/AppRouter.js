import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
//import './App.css';

const AppRouter = () => (
  <BrowserRouter>
<div>
  <Header/>
  <switch>
<Route path="/" Component={} exact={true} />
<Route path="/create" Component={} />
<Route path="/edit/:id" Component={} />
<Route Component={NotFoundPage} />   {/* 404 route */}
  </switch>
  <Footer />
</div>
</BrowserRouter>
)
  

export default AppRouter;
