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
    const { currentColumn } = this.props;

    return (
      <div className="row">
        <div className="col">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Column with the relevant items</span>
            </div>
            <select
              className="custom-select"
              name="columns"
              value={currentColumn}
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
        </div>
      </div>
    );
  }
}


export default ColumnSelector;
