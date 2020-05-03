import React, { Component } from 'react';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render(){
    const { values } = this.props;

    return(
    <div>
      <h1>Hi</h1>
    </div>
    );
  }
}

export default FormUserDetails;
