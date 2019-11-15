import React from 'react';
// import { NavLink } from 'react-router-dom';

import './NavigationItem.css';
// {/*<NavLink*/}
// {/*exact={props.exact}*/}
// {/*to={props.link}*/}
// {/*activeClassName={classes.active}*/}
// {/*>*/}
// {/*{props.children}*/}
// {/*</NavLink>*/}
const navigationItem = (props) => (
    <li className="NavigationItem">
        {/*<a href="/  ">A Link</a>*/}
        <a
            href={props.link}
        className={props.active? "active":null}
        >{props.children}</a>
    </li>
);

export default navigationItem;