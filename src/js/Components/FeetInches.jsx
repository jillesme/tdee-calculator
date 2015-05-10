const React = require('react');

import Convert from '../Utils/Convert';

class FeetInches extends React.Component {
  constructor (props) {
    super(props);

    this.fi = {
        feet: 0,
        inches: 0
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(type, ev) {
    // optional feet inches array, only fill when lbs is set
    this.fi[type] = ev.target.value;

    this.props.update(Convert.height(this.fi));
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="5"
               onChange={this.onChange.bind(this, 'feet')} /> feet
        <input type="text" placeholder="0"
               onChange={this.onChange.bind(this, 'inches')} /> inches
      </div>
    );
  }
}

export default FeetInches
