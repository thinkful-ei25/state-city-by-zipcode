import React from 'react';

import InfoOutput from './infoOutput';
import ZipInput from './zipInput';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: ''
    };
  }

  render() {
    const zipInfo = this.props.zipInfo.filter(
      place => place.Zipcode === this.state.zipcode);
      
  return (
    <div>
      <h1>Explore California!</h1>
      <p>Enter in a california zipcode and get back some handy information!</p>
      <ZipInput onSubmit={zipcode => this.setState({ zipcode })} />
      <InfoOutput zipInfo={zipInfo} />
    </div>
    );
  }
}