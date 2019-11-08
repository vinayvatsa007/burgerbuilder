import React from 'react';
// import classes from './BuildControls.css';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {Label:'Salad', type:'salad'},
    {Label:'Bacon', type:'bacon'},
    {Label:'Cheese', type:'cheese'},
    {Label:'Wheat', type:'wheat'}
];
{/*<div className={classes.BuildControls}>*/}
const buildControls = (porps)=> (
        <div className="BuildControls">
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} />
            ))}
        </div>
    );
export default buildControls;