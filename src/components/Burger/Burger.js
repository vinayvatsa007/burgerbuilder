import React from 'react';
// import classes './Burger.css';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredinet';

const burger = (props)=> {
    {/*<div className={classes.Burger}>*/}
  return (
      <div className="Burger">
          <BurgerIngredient type="bread-top"/>
          <BurgerIngredient type="cheese"/>
          <BurgerIngredient type="wheat"/>
          <BurgerIngredient type="bread-bottom"/>

      </div>

  );
};

export default burger;