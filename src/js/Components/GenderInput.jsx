const React = require('react');

class GenderInput extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange (ev) {
    this.props.update('gender', ev.target.value);
  }
  render () {

    return (
      <div>
        <select onChange={this.onChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    );
  }
}

export default GenderInput;
