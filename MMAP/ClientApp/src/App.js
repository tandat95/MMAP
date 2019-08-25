import React, { Component } from 'react';
import MapPanel from './components/MapPanel';
import Button from '@material-ui/core/Button';


export default class App extends Component {
  displayName = App.name
  render() {
    return (
      <MapPanel />
    );
  }
}
