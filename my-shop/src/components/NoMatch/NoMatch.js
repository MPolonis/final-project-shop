import React, { Component } from 'react';
import './NoMatch.scss';

class NoMatch extends Component {
  render() {
    return <div><h1 className="error">Ups, nie znaleziono strony</h1></div>;
  }
}

export default NoMatch;
