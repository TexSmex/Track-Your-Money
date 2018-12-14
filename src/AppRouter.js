import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import CreateExpensePage from './pages/CreateExpensePage';
import EditExpensePage from './pages/EditExpensePage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
//import './App.css';

const AppRouter = () => (
  <BrowserRouter>
<div>
  <Header/>
  <Switch>
<Route path="/" component={DashboardPage} exact={true} />
<Route path="/create" component={CreateExpensePage} />
<Route path="/edit/:id" component={EditExpensePage} />
<Route component={NotFoundPage} />   {/* 404 route */}
  </Switch>
  <Footer />
</div>
</BrowserRouter>
)
  

export default AppRouter;
