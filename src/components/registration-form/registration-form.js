import React, { Component } from 'react';

export class RegistrationForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: ''
  }

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //Go back a step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //Field Change
  fieldChange = input => e => {
    this.setState;
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default RegistrationForm;
