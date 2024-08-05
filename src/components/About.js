
import React from 'react';
import { image } from '../data/user';

function About() {
  return (
    <div>
      <img src={image} alt="User" />
      <p>About content here</p>
    </div>
  );
}

export default About;
