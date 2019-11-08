import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state(...);
    // }

    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            wheat:0
        }
    };
// <div>Build Controls i.e. add/remove ingrediants</div>
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;
