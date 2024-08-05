
import React from 'react';
import { username, city } from '../data/user';

function Home() {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;
