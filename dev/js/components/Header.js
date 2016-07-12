import React from "react";
import {Link} from 'react-router';

export default class Header extends React.Component {

    render() {
        return (
            <ul className="top-nav">
                <li className="item"><Link to="/forum" activeClassName="active">Forum</Link></li>
                <li className="item"><Link to="/videos" activeClassName="active">Videos</Link></li>
            </ul>
        );
    }

}
