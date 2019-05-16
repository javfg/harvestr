import React from 'react';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions
import LoadItemList from './MainPage/LoadItemList';
import LoadSearchProfile from './MainPage/LoadSearchProfile';
import LoadRankingDefinition from './MainPage/LoadRankingDefinition';
import LaunchSearch from './MainPage/LaunchSearch';
import LoadSearchResults from './MainPage/LoadSearchResults';

import PageTitle from '../common/PageTitle';


const MainPage = () => (
  <div className="container my-4">
    <PageTitle
      icon={faSeedling}
      title="Create a harvest"
      description="To begin creating a harvest, select a CSV file or paste some data."
    />

    <LoadItemList />
    <LoadSearchProfile />
    <LoadRankingDefinition />
    <LaunchSearch />
    <LoadSearchResults />
  </div>
);


export default MainPage;
