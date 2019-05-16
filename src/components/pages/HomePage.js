import React from 'react';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions
import LoadItemList from './HomePage/LoadItemList';
import LoadSearchProfile from './HomePage/LoadSearchProfile';
import LoadRankingDefinition from './HomePage/LoadRankingDefinition';
import LaunchSearch from './HomePage/LaunchSearch';
import LoadSearchResults from './HomePage/LoadSearchResults';

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
