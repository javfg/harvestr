import React from 'react';
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { deleteQuery, addQuery } from '../../actions/searchProfile';

// Components.
import Badge from '../common/Badge';
import EditorItem from '../common/EditorItem';
import QueryItemDetails from './QueryItemDetails';

// Utils.
import { detailLabel } from '../../utils/labels';


class QueryList extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClickDeleteQuery = (name) => {
    this.props.deleteQuery(name);
  };

  handleClickDeleteField = (queryName, name) => {
    const {
      props: { searchProfile, updateQuery }
    } = this;

    const query = searchProfile.find(query => query.name === queryName);
    query.fields = query.fields.filter(field => field.name !== name);

    updateQuery(queryName, query);
  };


  render() {
    const {
      handleClickDeleteField,
      handleClickDeleteQuery,
      props: { searchProfile }
    } = this;

    return (
      <>
        <TransitionGroup>
          {searchProfile.map(query => {
            const { name, fields, ...details } = query;
            const queryName = name;

            return (
              <CSSTransition key={`query-${name}`} timeout={700} classNames="move">
                <EditorItem
                  badge={<Badge type="query" name={name} details={detailLabel(details)} />}
                  expandButton={faPlus}
                  contractButton={faMinus}
                  name={name}
                  deleteItem={() => handleClickDeleteQuery(queryName)}
                >
                  <div className="container px-4 py-2">
                   <QueryItemDetails query={query} />
                  </div>
                </EditorItem>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = state => ({
  searchProfile: state.harvest.searchProfile
});

const mapDispatchToProps = dispatch => ({
  addQuery: (newQuery) => dispatch(addQuery(newQuery)),
  deleteQuery: (queryName) => dispatch(deleteQuery(queryName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QueryList);
