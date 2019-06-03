import React from "react";


class ResultsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.spanRef = React.createRef();
  }


  render() {
    const { entry, mightOverflow } = this.props;

    return (
      entry.map((entryField, index) => {
        // Ugly hack, will not expand spans with lesser than 50 chars... must find another way.
        const spanClasses = mightOverflow && entryField.value.length > 50 ? 'might-overflow' : '';

        return (
          <td
            className="border td-normal"
            key={`entryfield-${entryField}-${index}`}
          >
            <span className={`text-xs ${spanClasses}`}>{entryField.value}</span>
          </td>
        );
      })
    );
  }
}


export default ResultsEntry;
