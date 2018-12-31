import * as React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  public render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <div><Link to="/">Home -></Link></div>
          <div><Link to="/user/123">User 1 -></Link></div>
          <div><Link to="/user/456">User 2 -></Link></div>
          <div><Link to="/user/789">User 3 -></Link></div>
        </div>
      </div>
    );
  }
}

export default About;
