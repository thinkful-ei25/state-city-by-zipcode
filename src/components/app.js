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
      place => place.zipcode === this.state.zipcode);
  
    }


}