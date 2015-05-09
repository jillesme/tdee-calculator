const React = require('react');

class AgeInput extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange (ev) {
    this.props.update('age', ev.target.value);
  }
  render () {

    return (
      <div>
        <input type="text" placeholder="27" onChange={this.onChange} /> years
      </div>
    );
  }
}

export default AgeInput;
