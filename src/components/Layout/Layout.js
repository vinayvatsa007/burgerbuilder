import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class  Layout extends Component {
    state ={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        console.log(this.state.showSideDrawer);
        this.setState({showSideDrawer:false});
    }
    drawerToggleClicked = () =>{
        let showSideDrawer = this.setState.showSideDrawer;
        this.setState({showSideDrawer: !showSideDrawer});
        console.log(this.state.showSideDrawer);
    }

    render() {
        return (
            <Aux>
                <Toolbar  drawerToggleClicked={this.drawerToggleClicked}/>
                <SideDrawer
                    open = {this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler} />
                <main className = "Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;