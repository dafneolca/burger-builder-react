import React from 'react';
import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { key: 'salad', label: 'Salad', type: 'salad' },
  { key: 'bacn', label: 'Bacon', type: 'bacon' },
  { key: 'cheese', label: 'Cheese', type: 'cheese' },
  { key: 'meat', label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
  console.log(props.disabled)
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <div><BuildControl
          key={ctrl.key}
          label={ctrl.label}
          added={() => props.added(ctrl.type)}
          removed={() => props.removed(ctrl.type)}
          disabled={props.disabled[ctrl.type]} /></div>
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>

  )
}

export default buildControls;