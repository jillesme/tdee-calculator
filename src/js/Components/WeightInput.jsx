const React = require('react');

import Convert from '../Utils/Convert';

class WeightInput extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange (ev) {
    var weight = ev.target.value;
    if (this.props.metric === 'lbs') {
      weight = Convert.weight(weight);
    }
    this.props.update('weight', weight);
  }
  render () {
    let metric = this.props.metric;
    let exampleWeight = (metric === 'kg' ? 77 : 170);

    return (
      <div>
        <input type="text" placeholder={exampleWeight} onChange={this.onChange} />
        {metric}
      </div>
    );
  }
}

export default WeightInput;
