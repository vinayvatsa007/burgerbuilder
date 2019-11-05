import React, {Component} from 'react';

import logo from './logo.svg';
// import './App.css';
// import myStyles from './style.module.css';
import styled from 'styled-components';
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

// class App extends Component {
//     constructor(){
//         super();
//         this.state = {isRed:true}
//     }
//     getClass(inputParam){
//       switch (inputParam){
//           case '1': {
//             return 'class1'
//           }
//           case '2': {
//               return 'class2'
//           }
//           case '3': {
//               return 'class3'
//           }
//       }
//     }
//     render() {
//         const isRed = this.state.isRed;
//
//         // return <p className={isRed?'class1':'class2'}> sample text</p>
//         return <p className={myStyles.class3}> sample text</p>
//     }
// }

// const RedText = styled.p`
//   color: red;
// `
// class App extends Component {
//      render() {
//         return(
//             <RedText> sample Styled component</RedText>
//         );
//     }
// }
const Text = styled.p`
color: ${props=> props.red? 'red':'blue'}
`
class App extends Component {
    render() {
        return(
        <div>
            <Text red> sample Styled component</Text>
            <Text nonred> sample Styled component</Text>
        </div>

        );
    }
}
export default App;
