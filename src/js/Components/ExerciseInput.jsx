const React = require('react');

class ExerciseInput extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange (ev) {
    this.props.update('exercise', ev.target.value);
  }
  render () {

    return (
      <div>
        <select onChange={this.onChange}>
          <option value="no-exercise">
            No exercise (desk job/sedentary)
          </option>
          <option value="3-week">
            3x week
          </option>
          <option value="4-week">
            4x week
          </option>
          <option value="5-week">
            5x week
          </option>
          <option value="5-week-intense">
            5x week (intense)
          </option>
          <option value="6-week">
            6x week
          </option>
          <option value="every-day">
            Every day
          </option>
          <option value="every-day-intense">
            Every day (intense)
          </option>
          <option value="daily-exercise-physical-job">
            Daily exercise + physical job
          </option>
        </select>
      </div>
    );
  }
}

export default ExerciseInput;
