const React = require('react');

class Metric extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange (ev) {
    this.props.update('reset');
    this.props.update('metric', ev.target.value);
  }
  render () {
    return (
      <div>

        <input type="radio" name="metric" value="kg" defaultChecked="checked" onChange={this.onChange} /> kg &amp; cm
        <br/>
        <input type="radio" name="metric" value="lbs" onChange={this.onChange} /> lbs &amp; feet/inches

      </div>
    );
  }
}

export default Metric;
