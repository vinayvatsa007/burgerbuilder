import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render(){
        return(
            <Aux>
                <Burger/>
                <div>Build Controls i.e. add/remove ingrediants</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
