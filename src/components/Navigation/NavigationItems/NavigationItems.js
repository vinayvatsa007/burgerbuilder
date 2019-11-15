import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        {/*<NavigationItem link="/" active>Orders</NavigationItem>*/}
        <NavigationItem link="/" active >Checkout</NavigationItem>
    </ul>
);

export default navigationItems;