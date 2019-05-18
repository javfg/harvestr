import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/common/Header';

import HarvestPage from '../components/pages/HarvestPage';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';
import RankingPage from '../components/pages/RankingPage';
import ResultsPage from '../components/pages/ResultsPage';
import SearchProfilePage from '../components/pages/SearchProfilePage';


const AppRouter = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/harvest" component={HarvestPage} />
        <Route path="/profile" component={SearchProfilePage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/results" component={ResultsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
)


export default AppRouter;