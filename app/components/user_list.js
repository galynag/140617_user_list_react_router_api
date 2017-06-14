import React, {Component} from 'react';
import {Link} from 'react-router';

export default class UserList extends Component {
    render() {
        return(
            <ul>
                <li><Link to="users/1"/>user 1</li>
                <li><Link to="users/2"/>user 2</li>
                <li><Link to="users/3"/>user 3</li>
                <li><Link to="users/4"/>user 4</li>
                <li><Link to="users/5"/>user 5</li>
            </ul>
        )
    };
};
