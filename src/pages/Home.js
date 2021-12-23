import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
    <div>
      <div>Hello World</div>
      <Link to="/user">user</Link>
      <div>
        <a href="/user">user</a>
      </div>
    </div>
  );
}

export default Home;
