import React from 'react';
// import classes from './BuildControls.css';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Wheat', type:'wheat'}
];
{/*<div className={classes.BuildControls}>*/}
const buildControls = (props)=> (
        <div className="BuildControls">
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={()=>props.ingredientAdded(ctrl.type)} />
            ))}
        </div>
    );
export default buildControls;