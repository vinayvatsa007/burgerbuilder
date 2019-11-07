import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

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

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls i.e. add/remove ingrediants</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
