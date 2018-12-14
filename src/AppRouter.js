import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreateExpensePage from './pages/CreateExpensePage';
import EditExpensePage from './pages/EditExpensePage';
import NotFoundPage from './pages/NotFoundPage';
//import './App.css';

const AppRouter = () => (
  <BrowserRouter>
<div>
  <Header/>
  <switch>
<Route path="/" Component={DashboardPage} exact={true} />
<Route path="/create" Component={CreateExpensePage} />
<Route path="/edit/:id" Component={EditExpensePage} />
<Route Component={NotFoundPage} />   {/* 404 route */}
  </switch>
  <Footer />
</div>
</BrowserRouter>
)
  

export default AppRouter;
