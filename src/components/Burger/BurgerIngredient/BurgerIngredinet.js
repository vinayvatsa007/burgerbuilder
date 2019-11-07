import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import classes from './BurgerIngredient.css';
import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                // ingredient = <div className={"BreadBottom"}></div>;
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seed1"></div>
                        <div className="Seed2"></div>
                        <div className="Seed3"></div>
                        <div className="Seed4"></div>
                    </div>
                );
                break;
            case ('wheat'):
                ingredient = <div className="Wheat"></div>;
                break;
            case ('cheese'):
                ingredient = <div className="Cheese"></div>;
                break;
            case ('bacon'):
                ingredient = <div className="Bacon"></div>;
                break;
            case ('salad'):
                ingredient = <div className="Salad"></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;