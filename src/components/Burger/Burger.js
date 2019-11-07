import React from 'react';
// import classes './Burger.css';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredinet';

const burger = (props)=> {

    {/*<div className={classes.Burger}>*/}
    //tranforming an object of key value pair into an array of burger ingredients
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
                return [...Array(props.ingredients[igKey])].map((_,i)=>{
                   return <BurgerIngredient key={igKey+i} type={igKey} />;
                });
            });
  return (
      <div className="Burger">
          <BurgerIngredient type="bread-top"/>
          {/*<BurgerIngredient type="cheese"/>*/}
          {/*<BurgerIngredient type="wheat"/>*/}
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom"/>

      </div>

  );
};

export default burger;