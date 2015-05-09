const React = require('react');

import FeetInches from './FeetInches.jsx';

class HeightInput extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.updateFi = this.updateFi.bind(this);
  }

  onChange (ev) {
    let height = ev.target.value;
    this.props.update('height', height);
  }

  updateFi (cm) {
    // todo with reflux
    this.props.update('height', cm);
  }

  render () {

    let input = (<div><input type="text" placeholder="183" onChange={this.onChange} /> cm</div>);
    if (this.props.metric === 'lbs') input = <FeetInches update={this.updateFi} />;

    return (
      <div>
        {input}
      </div>
    );
  }
}

export default HeightInput;
