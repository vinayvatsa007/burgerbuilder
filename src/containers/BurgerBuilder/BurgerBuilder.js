import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false
    };

    updatePurchaseState(ingredients){
        // const ingredients = {...this.state.ingredients};
        // console.log("ingredient object");
        // console.log(ingredients);
        // console.log("object keys - " + Object.keys(ingredients));

        const sum = Object.keys(ingredients)
            .map(igKey => {
                // console.log("key- " + igKey);
                return ingredients[igKey];
            })
            .reduce((sum,el)=> {
                // console.log("sum=" + sum + ", el=" + el);
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedCount = oldIngredientCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGEDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if(oldIngredientCount<=0){
            return;
        }
        const updatedCount = oldIngredientCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDecrease = INGEDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDecrease;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }
// <div>Build Controls i.e. add/remove ingrediants</div>
    render(){
        const disabledInfo = {...this.state.ingredients};
        // console.log({...this.state.ingredients});
        // console.log(disabledInfo);
        for(let key in disabledInfo){
            // console.log(key);
            disabledInfo[key] = disabledInfo[key] <=0
        }

        //console.log(disabledInfo);
        return(
            <Aux>
                <Modal>
                    <OrderSummary ingredients = {this.state.ingredients} />
                </Modal>>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
