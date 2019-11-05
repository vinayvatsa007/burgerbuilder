import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'style.module.css';

// function App() {
//   const style = {color: 'green'};
//     state ={
//         isRed:true
//     };
//   return (
//     <div className="App">
//       <p style={{color: 'red'}}>Inline css style - Inline styles are often used when the styling has to change based on JavaScript logic or if you need to pass in calculated values.</p>
//       <p style={style}>using style object</p>
//     </div>
//   );
// }

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {isRed:false}
//   }
//   render() {
//         const isRed = this.state.isRed;
//
//         return <p style={{color: isRed?'red':'green'}} > sample text</p>
//     }
// }

class App extends Component {
    constructor(){
        super();
        this.state = {isRed:true}
    }
    getClass(inputParam){
      switch (inputParam){
          case '1': {
            return 'class1'
          }
          case '2': {
              return 'class2'
          }
          case '3': {
              return 'class3'
          }
      }
    }
    render() {
        const isRed = this.state.isRed;

        // return <p className={isRed?'class1':'class2'}> sample text</p>
        return <p className={this.getClass('3')}> sample text</p>
    }
}
export default App;
