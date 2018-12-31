import * as React from 'react';
import { Link } from 'react-router-dom';
import { Ctx } from '../typings';
import './Home.css';
import logo from './react.svg';

interface IHomeProps {
  whatever: string;
}

class Home extends React.Component<IHomeProps> {
  public static async getInitialProps({ req, res, match, history, location, ...ctx }: Ctx<any>) {
    return { whatever: 'stuff' };
  }

  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to After.js</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </p>
        <p>Props passed to this component...</p>
        <pre>
          whatever: {this.props.whatever}
        </pre>
        <div><Link to="/about">About -></Link></div>
        <div><Link to="/user/123">User 1 -></Link></div>
        <div><Link to="/user/456">User 2 -></Link></div>
        <div><Link to="/user/789">User 3 -></Link></div>
      </div>
    );
  }
}

export default Home;
