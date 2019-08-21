import React from 'react';
import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
  console.log(props.disabled)
  return (
    <div>
      <div className={classes.BuildControls}> {controls.map(ctrl => (
        <div><BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.added(ctrl.type)}
          removed={() => props.removed(ctrl.type)}
          disabled={props.disabled[ctrl.type]} /></div>
      ))} </div>
    </div>
  )
}

export default buildControls;