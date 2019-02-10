import React from 'react';

// Actions
import LoadItemList from './MainPage/LoadItemList';
import LoadSearchProfile from './MainPage/LoadSearchProfile';
import LoadRankingDefinition from './MainPage/LoadRankingDefinition';
import LaunchSearch from './MainPage/LaunchSearch';
import LoadSearchResults from './MainPage/LoadSearchResults';


const MainPage = () => (
  <div>
    <h2>Home</h2>

    <LoadItemList />
    <LoadSearchProfile />
    <LoadRankingDefinition />
    <LaunchSearch />
    <LoadSearchResults />
  </div>
);


export default MainPage;



// 8b95f31461c48d27eb8cce6e8f1caa15 BIOGRID API KEY
// BIOGRID https://webservice.thebiogrid.org/interactions/?geneList=APOB&accessKey=8b95f31461c48d27eb8cce6e8f1caa15
// DISGENET http://rdf.disgenet.org/sparql/?default-graph-uri=&query=SELECT+DISTINCT+%3Fgda+%3Fdisease+%3Fgene+FROM+%3Chttp%3A%2F%2Frdf.disgenet.org%3E+WHERE+%7B+%3Fgda+sio%3ASIO_000628+%3Fdisease%2C%3Fgene+.++%3Fdisease+rdf%3Atype+ncit%3AC7057+.++filter+regex%28%3Fdisease%2C+%22umls%2Fid%22%29+.+%3Fgene+rdf%3Atype+ncit%3AC16612+.++filter+regex%28%3Fgene%2C+%22ncbigene%22%29+.+%7D+LIMIT+20&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on