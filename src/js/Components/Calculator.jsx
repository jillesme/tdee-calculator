import React from 'react';

// Components
import Metric from './Metric.jsx';
import HeightInput from './HeightInput.jsx';
import WeightInput from './WeightInput.jsx';
import GenderInput from './GenderInput.jsx';
import ExerciseInput from './ExerciseInput.jsx';
import AgeInput from './AgeInput.jsx';

class Calculator extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      metric: 'kg',
      height: '',
      weight: '',
      gender: 'male',
      age: '',
      exercise: 'no-exercise',
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState (key, to) {
    if (key === 'reset') {
      return this.setState({ height: '', weight: ''});
    }
    this.setState({
      [key]: to
    });
  }

  render () {


    // BMR
    let difference = {
      male: 5,
      female: -161
    };
    let bmr = (10 * this.state.weight) + (6.25 * this.state.height) - (5 * this.state.age);
    console.log(`(10 * ${this.state.weight}) + (6.25 * ${this.state.height}) - (5 * ${this.state.age})`);
    console.log(`+= ${difference[this.state.gender]}`);
    bmr += difference[this.state.gender];
    bmr = Math.round(bmr);

    // TDEE
    let multiplier = {
      'no-exercise': 1.2,
      '3-week': 1.375,
      '4-week': 1.418,
      '5-week': 1.462,
      '5-week-intense': 1.55,
      '6-week': 1.50,
      'every-day': 1.637,
      'every-day-intense': 1.725,
      'daily-exercise-physical-job': 1.9
    };
    let activity = this.state.exercise;
    let tdee = bmr * multiplier[activity];
    tdee = Math.round(tdee);

    return (
      <div>
        <h1>TDEE Calculator</h1>
        <Metric update={this.updateState} />
        <hr/>
        <GenderInput update={this.updateState} />
        <hr/>
        <HeightInput metric={this.state.metric} update={this.updateState} />
        <hr/>
        <WeightInput metric={this.state.metric} update={this.updateState} />
        <hr/>
        <AgeInput update={this.updateState} />
        <hr/>
        <ExerciseInput update={this.updateState} />

        <h1>BMR = {bmr}</h1>
        <h1>TDEE = {tdee}</h1>
        <small>This calculator uses the Mifflin-St Jeor formula</small>
      </div>
    );
  }
}

export default Calculator;
