import React from 'react';
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Components.
import Badge from '../common/Badge';
import EditorItem from '../common/EditorItem';

// Utils.
import { detailLabel } from '../../utils/labels';


class QueryList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { searchProfile } = this.props;


    return (
      <>
        <TransitionGroup>
          {searchProfile.map(query => {
            const { name, fields, ...details } = query;

            return (
              <CSSTransition key={`query-${name}`} timeout={700} classNames="move">
                <EditorItem
                  badge={<Badge type="query" name={name} details={detailLabel(details)} />}
                >
                  <p>hi</p>
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

export default connect(mapStateToProps)(QueryList);
