import React from 'react';

import { faGavel } from '@fortawesome/free-solid-svg-icons';

// Components.
import PageTitle from '../common/PageTitle';


class RankingPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container my-4">
        <PageTitle
          description="Build a Ranking definition by adding rules. Every rule will affect a field of a query,
                       and must be described by an operator and a score."
          icon={faGavel}
          title="Ranking Definition Editor"
        />
      </div>
    );
  }
}


export default RankingPage;
