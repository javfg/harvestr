import React from 'react';
import { connect } from "react-redux";

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
        {rules.map(rule => <RuleItem key={`rule-${rule.name}`} rule={rule} />)}
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
