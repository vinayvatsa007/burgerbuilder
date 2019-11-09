import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGEDIENT_PRICE ={
    salad: .5,
    cheese:.4,
    wheat: 1.3,
    bacon: .7
};
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
        },
        totalPrice: 4



    };
    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedCount = oldIngredientCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGEDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    }

    removeIngredientHandler = (type) => {

    }
// <div>Build Controls i.e. add/remove ingrediants</div>
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
