import React, { Component } from 'react';
import Aux from '../../hoc/aux';

import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 2,
      cheese: 2,
      bacon: 1
    }
  }

  render() {
    return (
      <Aux>
        <div><Burger ingredients={this.state.ingredients} /></div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;