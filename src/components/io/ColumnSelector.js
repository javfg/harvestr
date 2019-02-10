import React from 'react';


export class ColumnSelector extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }


  handleColumnSelected = event => {
    this.props.onSelectedColumn(event.target.value)
  }


  render() {
    return (
      <div>
        <label htmlFor="columns">Select column to get elements from:</label>
        <select
          name="columns"
          onChange={this.handleColumnSelected}
          disabled={this.props.columns.length === 0}
        >
          <option key={'none'} value="none">Select a column...</option>
          {this.props.columns.map((c, i) => {
            const name = c ? c.trim() : '<Empty column header>';
            const key = `${i}-${name}`;

            return <option key={key} value={c}>{name}</option>;
          })}
        </select>
      </div>
    );
  }
}


export default ColumnSelector;
