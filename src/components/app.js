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
      <h1>Find Out More About a Zipcode!</h1>
      <ZipInput onSubmit={zipcode => this.setState({ zipcode })} />
      <InfoOutput zipInfo={zipInfo} />
    </div>
    );
  }
}