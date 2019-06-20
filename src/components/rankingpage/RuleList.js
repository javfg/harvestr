import React from 'react';
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Components.
import RuleItem from './RuleItem';
import NewRuleItem from './NewRuleItem';


class RuleList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      rankingDefinition: { rules }
    } = this.props;


    return (
      <>
        <TransitionGroup transitionName="move" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          {rules.map(rule =>
            <CSSTransition key={`rule-${rule.name}`} timeout={500} classNames="move">
              <RuleItem rule={rule} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <NewRuleItem />
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = state => ({
  rankingDefinition: state.harvest.rankingDefinition
});

export default connect(mapStateToProps)(RuleList);
