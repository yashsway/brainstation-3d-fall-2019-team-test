import React from 'react';

import './Input.scss';

export default class Input extends React.Component {
  render () {
    return (
      <input className="input" type="text" name="name" placeholder="enter your name if it's not Josh"></input>
    )
  }
}