import React from 'react';

import './Input.scss';

export default class Input extends React.Component {
  render () {
    return (
      <input className="input" type="text" name="name" placeholder="enter your name"></input>
    )
  }
}