import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/common/header';

import HomePage from '../components/pages/HomePage';
import SearchProfilePage from '../components/pages/SearchProfilePage';
import RankingPage from '../components/pages/RankingPage';
import HarvestPage from '../components/pages/HarvestPage';
import NotFoundPage from '../components/pages/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={SearchProfilePage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/harvest" component={HarvestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
)


export default AppRouter;