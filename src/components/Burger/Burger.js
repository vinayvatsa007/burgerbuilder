import React from 'react';
// import classes './Burger.css';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredinet';

// {/*<div className={classes.Burger}>*/}
// reduce take 2 param - first call back func and 2nd initial value
const burger = (props)=> {
    //tranforming an object of key value pair into an array of burger ingredients
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
                return [...Array(props.ingredients[igKey])].map((_,i)=>{
                   return <BurgerIngredient key={igKey+i} type={igKey} />;
                });
            }).reduce((arr, el) => {
        return arr.concat(el)
        },[]);
if(transformedIngredients.length===0){
    transformedIngredients = <p>Please start adding ingredients!</p>
}
    console.log(transformedIngredients);
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