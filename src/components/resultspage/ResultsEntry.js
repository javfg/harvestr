import React from "react";


class ResultsEntry extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { entry } = this.props;

    return (
      entry.map((entryField, index) =>
        <td
          key={`entryfield-${entryField}-${index}`}
        >
          <span className="text-xs">{entryField.value}</span>
        </td>
      )
    );
  }
}


export default ResultsEntry;
