import * as React from 'react';
import { Link } from 'react-router-dom';
import { Ctx } from '../typings';

interface IUserProps {
    specialID: string;
}

class User extends React.Component<IUserProps> {
    public static async getInitialProps({ match }: Ctx<any>) {
        return {
            specialID: `special-${match.params.id}`
        };
    }

    public render() {
        return (
            <div>
                <p>Hello User: ID #{this.props.specialID}</p>
                <div>
                    <div><Link to="/">Home -></Link></div>
                    <div><Link to="/about">About -></Link></div>
                    <div><Link to="/user/123">User 1 -></Link></div>
                    <div><Link to="/user/456">User 2 -></Link></div>
                    <div><Link to="/user/789">User 3 -></Link></div>
                </div>
            </div>
        );
    }
}

export default User;