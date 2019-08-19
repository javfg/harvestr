import React from 'react';


class ResultsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.spanRef = React.createRef();
  }


  render() {
    const { entries, mightOverflow, valueIndex } = this.props;

    return (
      entries.map((entryField, index) => {
        // Ugly hack, will not expand spans with lesser than 50 chars... must find another way.
        const spanClasses = mightOverflow && entryField.value[valueIndex].length > 50 ? 'might-overflow' : '';

        return (
          <td
            className="border td-normal"
            key={`entryfield-${entryField}-${index}`}
          >
            {
              entryField.linkTo ? (
                <span className={`text-xs ${spanClasses}`}>
                  <a
                    className="text-secondary"
                    href={entryField.links[valueIndex]}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {entryField.value[valueIndex]}
                  </a>
                </span>
              ) : (
                <span className={`text-xs ${spanClasses}`}>
                  {entryField.value[valueIndex]}
                </span>
              )
            }
          </td>
        );
      })
    );
  }
}


export default ResultsEntry;
