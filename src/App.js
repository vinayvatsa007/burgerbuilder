import React, {Component} from 'react';
import Aux from './hoc/Auxilary';
import Layout from './components/Layout/Layout';
// import './App.css';

class App extends Component {
    render() {
        return(
            <div>
                <Layout>
                    <p>TestLayout</p>
                </Layout>
            </div>
        );
    }
}
export default App;
