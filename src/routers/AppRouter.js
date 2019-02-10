import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/common/header';

import MainPage from '../components/pages/MainPage';
import SearchProfilePage from '../components/pages/SearchProfilePage';
import RankingPage from '../components/pages/RankingPage';
import HarvestPage from '../components/pages/HarvestPage';
import NotFoundPage from '../components/pages/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter basename="/harvestr">
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={SearchProfilePage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/harvest" component={HarvestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter;