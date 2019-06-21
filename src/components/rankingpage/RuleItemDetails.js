import React from 'react';


class RuleItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      props: { name, details }
    } = this;

    return (
      <div className="row">
        <div className="col px-5">
          {name}
          {Object.keys(details).map(detail => <p key={detail}>{detail}: {details[detail]}</p>)}
        </div>
      </div>
    );
  }
}


export default RuleItemDetails;
